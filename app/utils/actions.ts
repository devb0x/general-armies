'use server'

import {createUser, loginUser, searchUser} from "@/app/api/users/route"
import { redirect } from "next/navigation"
import {createArmy} from "@/app/api/dashboard/route"

export  async function searchUserAction(formData: FormData) {
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
	console.log(userPassword)

	await createUser(userName, userEmail, userPassword)
}

export async function loginUserAction(formData: FormData) {
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