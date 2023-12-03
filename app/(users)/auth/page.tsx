import React from "react"
import { searchUser } from "../../api/users/route"
import { redirect } from "next/navigation";


const Auth: React.FC = () => {

	async function search(formData: FormData) {
		'use server'

		const userEmail = formData.get("email")
		const isUserExist = await searchUser(userEmail)
		if (isUserExist) {
			console.log(isUserExist + ': user exist')
			redirect('/auth/register')
		}
		return isUserExist
	}

	return (
		<>
			<h1>Log in or create an account</h1>
			<form action={search} noValidate>
				<fieldset>
					<label htmlFor="email">
						Email Address
					</label>
					<input type="email" id="email" name="email" />
					<button type="submit">Continue</button>
				</fieldset>
			</form>
		</>
	)
}

export default Auth