import React from "react"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

import Navbar from "@/app/layout/navbar/Navbar";

export const metadata: Metadata = {
	title: 'General Armies',
	description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
		<html lang="en">
			<body className={inter.className}>
				<header>
					<Navbar />
				</header>
				{children}
			</body>
		</html>
	)
}
