import React from "react"
import type { Metadata } from "next"


export const metadata: Metadata = {
	title: 'Login',
	description: 'Create or log in to your account'
}


export default function AuthLayout({
	children,
	}: {
	children: React.ReactNode
}) {
	return (
		<main>
			<h1>Layout test - Log in or create account</h1>
			{/*<AuthForm />*/}
			{children}
		</main>
	)
}
