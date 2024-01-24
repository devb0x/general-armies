'use client'

import {useContext, useEffect} from "react"
import {AuthContext} from "@/app/contexts/auth-context"

import {useRouter} from "next/navigation"
import { usePathname } from 'next/navigation'

import Link from "next/link"

import styles from './styles.module.css'


const UserNav = (props) => {
	const authContext = useContext(AuthContext);
	const router = useRouter()
	const pathname = usePathname()


	// making sure context isn't `null`, which is its initial value
	if (!authContext) throw new Error("context is null");

	const { auth, setAuth } = authContext // destructuring the needed values

	useEffect(() => {
		console.log(props)
		// console.warn(pathname)
		if (props.user && props.email) {
			setAuth(true)
			if (pathname === '/auth/account') {
				console.warn('redirect user after logged in')
				router.push(`/dashboard?user=${props._id}`)
			}
		}
	}, [pathname, props, router, setAuth])

	return (
		<nav className={`${styles['user-nav']}`}>
			<Link
				href={`/dashboard?user=${props._id}`}
			>
				dashboard
			</Link>
			<Link
				href={`/auth/signout`}
			>
				logout
			</Link>
			<div>
				{props.user}
			</div>
		</nav>
	)
}

export default UserNav