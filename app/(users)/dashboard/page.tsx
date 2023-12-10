import React from "react"
import {auth} from "@/app/utils/auth";
import {redirect} from "next/navigation";

import {createArmy} from "@/app/api/dashboard/route";
import Button from "@/app/components/Button/Button";

const Dashboard: React.FC = async () => {
	const session = await auth()

	if (!session) {
		redirect('/api/auth/signin?callbackUrl=/dashboard')
	}

	return (
		<section>
			<h1>This is the dashboard page</h1>
			<div>
				{session.user.name} <br/>
				{session.user.id}
			</div>
			<Button
				createArmy={async () => {
					"use server"
					await createArmy()
				}}
			/>
		</section>
	)
}

export default Dashboard