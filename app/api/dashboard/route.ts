import connect from "@/app/api/db"
import {NextResponse} from "next/server"

import Army from '@/app/models/army'
import {auth} from "@/app/utils/auth"


export const createArmy = async (armyName, armyFaction, armyDescription, armyLore, units) => {
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
		name: armyName,
		faction: armyFaction,
		description: armyDescription,
		lore: armyLore,
		units: units
	})
	await army.save()
}

export const findUserArmies = async (ownerId) => {
	const session = await auth()

	if (!session) {
		return { message: "not authenticated"}
	}

	try {
		await connect()
	} catch (error) {
		return new NextResponse('error in creation' + error)
	}

	return Army.find({ownerId: ownerId})
}


