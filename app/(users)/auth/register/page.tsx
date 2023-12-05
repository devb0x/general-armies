// register component for new user
// check query params in url if (new_user) disabled input email
// https://nextjs.org/docs/app/api-reference/functions/server-actions#with-client-components


"use client"

import AuthForm from "@/app/components/AuthForm/AuthForm";
import {useSearchParams} from "next/navigation";
import {useEffect, useState} from "react";

const Register = () => {
	const [emailEntered, setEmailEntered] = useState(true)

	const searchParams = useSearchParams()
	const email = searchParams.get('email')

	useEffect(() => {
		if (email != null) {
			setEmailEntered(true)
		}
	}, [email])

	return (
		<>
			<div>
				register compo after email entered
			</div>
			<AuthForm emailEntered={emailEntered} email={email} />
		</>
	)
}

export default Register