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