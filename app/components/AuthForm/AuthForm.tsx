'use client'

import React, {useEffect, useState} from "react"

import { searchAction } from '../../utils/actions'
import {useSearchParams} from "next/navigation";

const AuthForm = (props) => {
	const [isEmailEntered, setIsEmailEntered] = useState(props.isEmailEntered || false)

	const searchParams = useSearchParams()
	const email = searchParams.get('email')

	useEffect(() => {
		if (email != null) {
			setIsEmailEntered(true)
		}
	}, [email])

	return (
		<>
			<form action={searchAction} noValidate >
				<fieldset>
					<label htmlFor="email">
						Email Address
					</label>
					<input
						type="email"
						id="email"
						name="email"
						value={props.email}
						disabled={isEmailEntered}
					/>
					<button type="submit" >Continue</button>
				</fieldset>
			</form>
		</>
	)
}

export default AuthForm