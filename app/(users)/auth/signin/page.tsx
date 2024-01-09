"use client"

import React from "react"
import { signIn } from "next-auth/react"

const SignIn: React.FC = (props) => {
	console.log(props)

	return (
		<div>
			<h1>Sign In custom page from next auth</h1>
			<button
				onClick={
					() => signIn("github", { callbackUrl: "/dashboard"})
				}
			>
				Sign in with GitHub
			</button>
			<br/>
			<button
				onClick={() => signIn("google", { callbackUrl: "/dashboard"})}
			>
				Sign in with Google
			</button>
		</div>
	)
}

export default SignIn