import connect from '../db'
import { NextResponse } from "next/server"
import User from "../../models/user"

export const GET = async (request) => {
	try {
		await connect()
		const users = await User.find()
		console.log(JSON.stringify(users))
		return new NextResponse(JSON.stringify(users), {status: 200})
	} catch(error) {
		return new NextResponse("error in fetching users" + error, {status: 500})
	}
}