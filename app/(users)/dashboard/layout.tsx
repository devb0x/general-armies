import React from "react"

import type { Metadata } from "next"

import styles from './styles.module.css'
import {auth} from "@/app/utils/auth";
import {redirect} from "next/navigation";


export const metadata: Metadata = {
	title: 'Dashboard',
	description: 'Manage your armies'
}


export default async function DashboardLayout({
	children,
	}: {
	children: React.ReactNode
}) {
	const session = await auth()

	if (!session) {
		redirect('/api/auth/signin?callbackUrl=/dashboard')
	}

	return (

		<main>
			<section className={styles.section}>
				{children}
			</section>
		</main>
	)
}
