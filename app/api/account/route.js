import connect from '../db'

import { NextResponse } from "next/server"
import User from "../../models/user"
import bcrypt from "bcrypt"

import Session from "@/app/models/session"
import { cookies, headers } from "next/headers"
import { redirect } from "next/navigation"

import {AuthContext} from "@/app/contexts/auth-context";
import { useContext } from "react"
import UserSSR from "@/app/layout/username/UserSSR"
import { loginSuccess } from "@/app/utils/helpers"


export const searchUser = async (userEmail) => {
	try {
		await connect()
		const users = await User.find({ email: userEmail })
		if (users?.length > 0) {
			return true
		}
		// return new NextResponse(JSON.stringify(users), {status: 200})
		return false
	} catch(error) {
		return new NextResponse("error in fetching users" + error, {status: 500})
	}
}

export const createUser = async (userName, userEmail, userPassword) => {

	try {
		await connect()

		/**
		 * hash password and save user
		 */
		const saltRounds = 10

		bcrypt.genSalt(saltRounds, function(err, salt) {
			bcrypt.hash(userPassword, salt, function(err, hash) {
				// Store hash in your password DB.
				const newUser = new User({
					username: userName,
					email: userEmail,
					password: hash
				})
				return newUser.save(newUser)
			})
		})
	} catch(error) {
		return new NextResponse("error in saving newUser" + error, {status: 500})
	}


}

export const loginUser = async (userEmail, userPassword) => {

	try {
		await connect()
	} catch (error) {
		return new NextResponse("error in login user" + error, {status: 500})
	}

	/**
	 * return an array of one (object) User
	 * @type {Query<Array<HydratedDocument<any, unknown, {}>>, any, {}, any, "find">}
	 */
	const user = await User.find({email: userEmail})

	if (user[0] === undefined) {
		console.log(userEmail + ' address doesn\'t exist')
		return
	}

	if (user[0]) {
		const match = await bcrypt.compare(userPassword, user[0].password)
		if (match) {
			console.log('user should be logged in')
			const session = await Session.find({ email: user[0].email })
			console.warn(session)

			if (session[0] === undefined) {


				const newSession = new Session({
					email: user[0].email,
					value: 'some text',
					startedAt: new Date(),
					expiresAt: new Date() + 100
				})
				console.log(newSession)
				newSession.save(newSession)
			} else {
				console.log('session exist, updating..')
				const update = {value: "new value"}
				await Session.findOneAndUpdate(update)
				console.log('new session: ' + session[0])
			}

			await cookies().set({
				name: 'userMail',
				value: user[0].email,
				httpOnly: true,
				path: '/',
			})
			await cookies().set({
				name: 'userName',
				value: user[0].username,
				httpOnly: true,
				path: '/',
			})

			/**
				// 	 * session expire after 30min
				// 	 */
			// 	await coll.createIndex({createdAt: 1}, {expireAfterSeconds: 60 * 30})
		}
	}

}
