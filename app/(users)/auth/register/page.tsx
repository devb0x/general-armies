// register component for new user
// check query params in url if (new_user) disabled input email
// https://nextjs.org/docs/app/api-reference/functions/server-actions#with-client-components


'use client'

import AuthForm from "@/app/components/AuthForm/AuthForm";
import {useSearchParams} from "next/navigation";
import {useEffect, useState} from "react";

import {registerUserAction} from "@/app/utils/actions";


const Register = () => {
	const [emailEntered, setEmailEntered] = useState(true)

	const searchParams = useSearchParams()
	const email = searchParams.get('email')

	useEffect(() => {
		if (email != null) {
			setEmailEntered(true)
			console.log(email)
		}
	}, [email])

	return (
		<>
			<div>

				<br/>
				register compo after email entered
				<hr/>
				<br/>

			</div>
			<AuthForm
				isEmailEntered={emailEntered}
				email={email}
				action={registerUserAction}
			/>
		</>
	)
}

export default Register