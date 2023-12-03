import React from "react"

const Login: React.FC = () => {

	async function search(formData) {
		'use server'
		console.log(formData)
	}

	return (
		<>
			<h1>Log in or create an account</h1>
			<form action={search} >
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

export default Login