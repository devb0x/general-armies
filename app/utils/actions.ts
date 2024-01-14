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
	// 'use server'
	//
	// const userName = formData.get("username")
	// const userEmail = formData.get("email")
	// const userPassword = formData.get("password")
	//
	// console.log('register user action called')
	//
	// return await createUser(userName, userEmail, userPassword)

	const createUser = async (userName, userEmail, userPassword) => {

		try {
			await connect()

			/**
			 * hash password and save user
			 */
			const saltRounds = 10

			bcrypt.genSalt(saltRounds, function (err, salt) {
				bcrypt.hash(userPassword, salt, function (err, hash) {
					// Store hash in your password DB.
					const newUser = new User({
						username: userName,
						email: userEmail,
						password: hash
					})
					return newUser.save(newUser)
				})
			})
		} catch (error) {
			return new NextResponse("error in saving newUser" + error, {status: 500})
		}
	}

	// const { userName, userEmail, userPassword } = Object.fromEntries(formData)

	try {
		await connect()

		// const userName = formData.get("username")
		// const userEmail = formData.get("email")
		// const userPassword = formData.get("password")
		// const saltRounds = 10

		// const salt = await bcrypt.genSalt(10);
		// const hashedPassword = await bcrypt.hash(userPassword, 10);
		const userName = formData.get("username")
		const userEmail = formData.get("email")
		const userPassword = formData.get("password")

		await createUser(userName, userEmail, userPassword)
	} catch (err) {
		console.log(err)
		throw new Error("Failed to create user.")
	}
}

export async function loginUserAction(formData: FormData) {
	'use server'

	const userEmail = formData.get("email")
	const userPassword = formData.get("password")

	// cookies().set({
	// 	name: 'userEmail',
	// 	value: userEmail,
	// 	httpOnly: true,
	// 	path: '/',
	// })

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
