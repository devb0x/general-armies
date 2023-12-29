import {auth} from "@/app/utils/auth"
import connect from "../db"
import { NextResponse } from "next/server"
import Army from "../../models/army"

export const GET = async (): Promise<any> => {
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

export const GetArmyById = async (id): Promise<any> => {
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