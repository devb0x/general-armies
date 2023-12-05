'use client'
import React from "react"

import AuthForm from "@/app/components/AuthForm/AuthForm";

const Auth: React.FC = () => {

	return (
		<div>
			<h2>title from auth/page</h2>
			<AuthForm isEmailEntered={false} email={null}/>
		</div>
	)
}

export default Auth