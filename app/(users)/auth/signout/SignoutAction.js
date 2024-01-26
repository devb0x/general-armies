'use client'

import { useContext, useEffect, useRef } from "react";
import { AuthContext } from "@/app/contexts/auth-context"
import { useRouter } from "next/navigation"


export default function SignOutAction({ deleteTokens }) {
	const authContext = useContext(AuthContext);
	// making sure context isn't `null`, which is its initial value
	if (!authContext) throw new Error("context is null");

	const { auth, setAuth } = authContext // destructuring the needed values

	const deleteTokensRef = useRef(deleteTokens);


	const router = useRouter()

	// return new Promise((resolve) => setTimeout(resolve, 3000)).then(r => console.log('resolved'))

	// Redirect to another route.







	useEffect(() => {
		deleteTokensRef.current = deleteTokens;
	}, [deleteTokens, deleteTokensRef]);

	useEffect(() => {
		deleteTokensRef.current();
	}, [deleteTokensRef]);

	useEffect(() => {
		setAuth(false)
	}, [auth, setAuth])

	// return null;


	new Promise((resolve) => setTimeout(resolve, 1500000))
		.then(r => console.log('resolved'))
		.then(r => router.push('/auth/account'))
		// .then(r => <SignOutAction deleteTokens={deleteTokens} />)

	console.log('redirected')
	// router.push('/auth/account');

}

