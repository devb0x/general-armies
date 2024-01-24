import React, {useEffect} from "react";
import Navbar from "@/app/layout/navbar/Navbar";
import Username from "@/app/layout/userNav/UserNav";

export default function HeaderLayout({
	children,
}: {
	children: React.ReactNode
}) {
	useEffect(() => {
		console.log('header layout')
	}, [])

	return (
		<HeaderLayout>
			<Navbar>
			<Username />
			</Navbar>
		</HeaderLayout>
	)
}