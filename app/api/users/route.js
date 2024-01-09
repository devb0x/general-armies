import connect from '../db'

import { NextResponse } from "next/server"
import User from "../../models/user"

export const searchUser = async (userEmail) => {
	try {
		await connect()
		const users = await User.find({ email: userEmail })
		// console.log(JSON.stringify(users))
		// console.log(users?.length)
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
	} catch(error) {
		return new NextResponse("error in saving newUser" + error, {status: 500})
	}

	const newUser = new User({
		name: userName,
		email: userEmail,
		password: userPassword
	})
	await newUser.save(newUser)

}

export const loginUser = async (userEmail, userPassword) => {
	try {
		await connect()

		/**
		 * return an array of one (object) User
		 * @type {Query<Array<HydratedDocument<any, unknown, {}>>, any, {}, any, "find">}
		 */
		const user = await User.find({ email: userEmail })

		if (user[0] === undefined) {
			console.log(userEmail + ' address doesn\'t exist')
		}

		if (user) {
			if (userPassword === user[0].password) {
				console.log('passwords matches, user should be set as logged')
			}
		}
	} catch (error) {
		return new NextResponse("error in login user" + error, {status: 500})
	}



}

// export const searchUserTwo = async (userEmail) => {
// 	try {
// 		await connectToDatabase()
// 		const users = await User.find({ email: userEmail })
// 		let db
// 		let client
// 		console.log(db)
// 		console.log(client)
// 		if (users?.length > 0) {
// 			return true
// 		}
// 	} catch (error) {
// 		return new NextResponse("error in fetching users" + error, {status: 500})
// 	}
// }