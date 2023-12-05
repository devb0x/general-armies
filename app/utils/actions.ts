'use server'

import { searchUser } from "../api/users/route"
import { redirect } from "next/navigation"

export  async function searchAction(formData: FormData) {
	'use server'

	const userEmail = formData.get("email")
	const isUserExist = await searchUser(userEmail)
	if (!isUserExist) {
		console.log(!isUserExist + ': user doesn\'t exist')
		redirect(`/auth/register/?email=${userEmail}`)
		return formData
	}
	return isUserExist
}