import { cookies } from "next/headers"

import SignOutAction from "@/app/(users)/auth/signout/SignoutAction"

import Spinner from "@/app/components/Spinner/Spinner"


const SignOut = async () => {

	async function deleteTokens() {
		'use server'

		cookies().delete('userMail')
		cookies().delete('userName')
		cookies().delete('_id')

		if (
			cookies().get('_id').value === '' &&
			cookies().get('userMail').value === '' &&
			cookies().get('userName').value === ''
		) {
			console.log('no cookies values')
		}
	}

	return (
		<>
			<Spinner />
			<SignOutAction deleteTokens={deleteTokens} />
		</>
	)
}

export default SignOut