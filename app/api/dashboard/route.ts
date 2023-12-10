import connect from "@/app/api/db"
import { NextResponse } from "next/server"

import Army from '../../models/army'
import {auth} from "@/app/utils/auth"


export const createArmy = async () => {
	const session = await auth()

	if (!session) {
		return { message: "not authenticated"}
	}

	try {
		await connect()
	} catch (error) {
		return new NextResponse('error in creation' + error)
	}

	const army = new Army({
		ownerId: session.user.id,
		name: "hardcoded name"
	})
	await army.save()
}
