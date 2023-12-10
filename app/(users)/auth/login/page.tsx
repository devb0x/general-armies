
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
				login compo after email entered & email exist
				<hr/>
				<br/>

			</div>
			<AuthForm
				isEmailEntered={emailEntered}
				email={email}
				action={null}
			/>
		</>
	)
}

export default Register