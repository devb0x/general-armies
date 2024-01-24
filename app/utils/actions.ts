'use server'

import {createUser, loginUser, searchUser} from "@/app/api/account/route"
import { redirect } from "next/navigation"
// import {createArmy} from "@/app/api/dashboard/route"
import {cookies} from "next/headers";
import connect from "@/app/api/db";
import User from "@/app/models/user";
import Post from "@/app/models/post";
import bcrypt from "bcrypt";
import {NextResponse} from "next/server";
import {revalidatePath} from "next/cache";

import {connectToDb} from "../utils/connectToDb";
import {useAuthContext} from "@/app/contexts/auth-context";
import {router} from "next/client";
import {useEffect, useRef} from "react";

export async function searchUserAction(formData: FormData) {
	'use server'

	const userEmail = formData.get("email")

	if (userEmail === '') {
		console.log('enter valid email')
		return
	}
	const isUserExist = await searchUserTwo(userEmail)

	if (isUserExist) {
		return redirect(`/auth/login?email=${userEmail}`)
	}

	if (!isUserExist) {
		console.log(!isUserExist + ': user doesn\'t exist')
		return redirect(`/auth/register?email=${userEmail}`)
		// return formData
	}
	return isUserExist
}

export async function registerUserAction(formData: FormData) {
	'use server'

	const userName = formData.get("username")
	const userEmail = formData.get("email")
	const userPassword = formData.get("password")

	console.log('register user action called')

	const res = new Promise(async () => {
		await createUser(userName, userEmail, userPassword)
	}).then(async () => {
		'use client'
		const { auth, setAuth } = useAuthContext()
		await console.log(auth)
	})

	return await createUser(userName, userEmail, userPassword)

	// const createUser = async (userName, userEmail, userPassword) => {
	//
	// 	try {
	// 		await connect()
	//
	// 		/**
	// 		 * hash password and save user
	// 		 */
	// 		const saltRounds = 10
	//
	// 		bcrypt.genSalt(saltRounds, function (err, salt) {
	// 			bcrypt.hash(userPassword, salt, function (err, hash) {
	// 				// Store hash in your password DB.
	// 				const newUser = new User({
	// 					username: userName,
	// 					email: userEmail,
	// 					password: hash
	// 				})
	// 				return newUser.save(newUser)
	// 			})
	// 		})
	// 	} catch (error) {
	// 		return new NextResponse("error in saving newUser" + error, {status: 500})
	// 	}
	// }

	// const { userName, userEmail, userPassword } = Object.fromEntries(formData)

}

export async function loginUserAction(formData: FormData, request) {
	'use server'

	const userEmail = formData.get("email")
	const userPassword = formData.get("password")

	await loginUser(userEmail, userPassword)
}

export async function createArmyAction(formData: FormData) {
	'use server'

	const armyName = formData.get("name")
	const armyFaction = formData.get("faction")
	const armyDescription = formData.get("description")
	const armyLore = formData.get("lore")

	await createArmy(armyName, armyFaction, armyDescription, armyLore, [])
		.then(() => {
			redirect('/dashboard')
	})
}

export const addPost = async (formData: FormData) => {
	// const title = formData.get("title");
	// const desc = formData.get("desc");
	// const slug = formData.get("slug");

	const { title, desc } = Object.fromEntries(formData);

	try {
		await connectToDb();
		const newPost = new Post({
			title,
			desc
		});

		await newPost.save();
		console.log("saved to db");
		revalidatePath("/blog");
		revalidatePath("/admin");
	} catch (err) {
		console.log(err);
		return { error: "Something went wrong!" };
	}
};

export const deleteOneCookie = async (arg) => {
	'use server'

	console.log('arg = ' + arg)
	cookies().delete(arg)
}
