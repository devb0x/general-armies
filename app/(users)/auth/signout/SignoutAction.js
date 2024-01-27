'use client'

import { useContext, useEffect, useRef } from "react"
import { AuthContext } from "@/app/contexts/auth-context"
import { useRouter } from "next/navigation"

export default function SignOutAction({ deleteTokens }) {
	const router = useRouter()
	const authContext = useContext(AuthContext)

	if (!authContext) throw new Error("context is null")

	const { auth, setAuth } = authContext // destructuring the needed values
	const deleteTokensRef = useRef(deleteTokens)


	useEffect(() => {
		deleteTokensRef.current = deleteTokens
	}, [deleteTokens, deleteTokensRef])

	useEffect(() => {
		deleteTokensRef.current()
	}, [deleteTokensRef])

	useEffect(() => {
		setAuth(false)
	}, [auth, setAuth])

	return new Promise((resolve) => setTimeout(resolve, 2000))
		.then(r => router.push('/auth/account'))
}

