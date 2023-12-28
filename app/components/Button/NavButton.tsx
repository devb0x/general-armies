'use client'

import React, {useEffect} from "react"
import button from "@/app/components/Button/Button";
import { useRouter } from "next/navigation";


const NavButton:React.FC = (props: {text}) => {
	const router = useRouter()

	useEffect(() => {
		const handleRouteChangeError = (err, url) => {
			if (err.cancelled) {
				console.log(`Route to ${url} was cancelled!`)
			}
		}
		return
	}, [router])

	return (
		<button
			onClick={() => {
				router.push('/dashboard/new-army')
			}}
		>
			{props.text}
		</button>
	)
}

export default NavButton