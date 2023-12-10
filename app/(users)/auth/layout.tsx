import React from "react"

import type { Metadata } from "next"

import styles from './styles.module.css'


export const metadata: Metadata = {
	title: 'Login',
	description: 'Create or log in to your account'
}


export default function AuthLayout({
	children,
	}: {
	children: React.ReactNode
}) {
	return (
		<main>
			<section className={styles.section}>
				{children}
			</section>
		</main>
	)
}
