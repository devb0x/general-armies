'use client'

import React, {createContext, useContext, useState} from "react"

type AuthContextProviderProps = {
	children: React.ReactNode
}

type AuthContext = {
	auth: boolean
	setAuth: React.Dispatch<React.SetStateAction<boolean>>
}

export const AuthContext = createContext<AuthContext | null>(null)

export default function AuthContextProvider({ children }: AuthContextProviderProps) {
	const [auth, setAuth] = useState(false)
	console.log(auth)

	return (
		<AuthContext.Provider
			value={{
				auth,
				setAuth
			}}
		>
			{children}
		</AuthContext.Provider>
	)
}

export function useAuthContext () {
	const context = useContext(AuthContext)

	if (!context) {
		throw new Error(
			"useAuthContext should be used with a AuthContextProvider"
		)
	}

	return context
}