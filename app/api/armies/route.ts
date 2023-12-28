import { auth } from "../../utils/auth"
import connect from "../db"
import { NextResponse } from "next/server"
import Army from "../../models/army"

export const GET = async () => {
	const session = await auth()

	if (!session) {
		return { message: "not authenticated"}
	}

	try {
		await connect()
		return await Army.find()
	} catch (error) {
		return new NextResponse('error in creation' + error)
	}

}

export const GetArmyById = async (id) => {
	const session = await auth()

	if (!session) {
		return { message: "not authenticated"}
	}

	try {
		await connect()
		return await Army.findById(id)
	} catch (error) {
		return new NextResponse('error in creation' + error)
	}

}