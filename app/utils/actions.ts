'use server'

import {createUser, searchUser, searchUserTwo} from "../api/users/route"
import { redirect } from "next/navigation"

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

	const userEmail = formData.get("email")
	const userPassword = formData.get("password")

	console.log('register user action called')
	console.log(userPassword)

	await createUser(userEmail, userPassword)

	// redirect('/')
}