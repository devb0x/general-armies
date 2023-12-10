'use client'
import React from "react"

import AuthForm from "@/app/components/AuthForm/AuthForm";
import {searchUserAction} from "@/app/utils/actions";
import LoginButton from "@/app/components/Button/LoginButton";
import {redirect} from "next/navigation";

const Auth: React.FC = () => {

	return (
		<div>
			<h2>Log in or create an account</h2>
			<AuthForm
				isEmailEntered={false}
				email={null}
				action={searchUserAction}
			/>
			<LoginButton
				provider={"GitHub"}
			/>
		</div>
	)
}

export default Auth