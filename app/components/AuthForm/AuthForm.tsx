'use client'

import React, {useEffect, useState} from "react"

import { searchUserAction } from '../../utils/actions'
import {useRouter, useSearchParams} from "next/navigation"

import styles from './authForm.module.css'

const AuthForm = (props) => {
	const [isEmailEntered, setIsEmailEntered] = useState(props.isEmailEntered || false)

	const searchParams = useSearchParams()
	const email = searchParams.get('email')

	const router = useRouter()

	useEffect(() => {
		if (email != null) {
			setIsEmailEntered(true)
		}
	}, [email])

	return (
		<form
			action={props.action}
			className={styles.form}
			noValidate={true}
		>
			<fieldset className={styles.fieldset}>
				<label htmlFor="email">
					Email Address
				</label>
				<div>
					<input
						type="email"
						id="email"
						name="email"
						defaultValue={props.email || email}
						disabled={isEmailEntered}
					/>
					{isEmailEntered &&
						<button
							type="button"
							onClick={() => {
								console.log('edit btn clicked')
								router.push('/auth')
							}
						}>Edit</button>
					}
				</div>
				{isEmailEntered &&
					<>
						<label htmlFor="password">
							Password
						</label>
						<input
							type="password"
							id="password"
							name="password"
						/>
					</>
				}
				<button
					type="submit" >
					{isEmailEntered ?
						'Create Account' :
						'Continue'
					}
				</button>
			</fieldset>
		</form>
	)
}

export default AuthForm