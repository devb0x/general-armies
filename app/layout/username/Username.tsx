'use client'

import {useContext, useEffect} from "react"
import {AuthContext} from "@/app/contexts/auth-context"
import {useRouter} from "next/navigation"


export default function Child(props) {
	const authContext = useContext(AuthContext);
	const router = useRouter()

	// making sure context isn't `null`, which is its initial value
	if (!authContext) throw new Error("context is null");

	const { auth, setAuth } = authContext // destructuring the needed values

	useEffect(() => {
		if (props.user && props.email) {
			setAuth(true)
			router.push('/')
		} else {
			return
		}
	}, [props, router, setAuth])

	return (
		<div>
			<p>User: {props.user} / Email: {props.email}</p>
		</div>
	)
}