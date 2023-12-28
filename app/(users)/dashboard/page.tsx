import React from "react"
import {auth} from "@/app/utils/auth";
import {redirect} from "next/navigation";

import {createArmy, findUserArmies} from "@/app/api/dashboard/route";
import Button from "@/app/components/Button/Button";
import {router} from "next/client";
import NavButton from "@/app/components/Button/NavButton";
import Link from "next/link";
import ArmyCardLink from "@/app/components/ArmyCardLink/ArmyCardLink";


const Dashboard: React.FC = async () => {
	const session = await auth()

	if (!session) {
		redirect('/api/auth/signin?callbackUrl=/dashboard')
	}

	const armies = await findUserArmies(session.user.id)

	console.log(armies)

	return (
		<section>
			<h1>This is the dashboard page</h1>
			<div>
				{session.user.name} <br/>
				userId: {session.user.id}
			</div>
			{/*<Button*/}
			{/*	createArmy={async () => {*/}
			{/*		"use server"*/}
			{/*		await createArmy()*/}
			{/*	}}*/}
			{/*/>*/}
			<NavButton
				text={'create army'}
			/>

			<br/><hr/>

			<h2>Army List</h2>
			{armies &&
				<>
					{armies.map((army, index) => (
						<ArmyCardLink
							key={index}
							link={`/army/${army.id}`}
							name={army.name}
							faction={army.faction}
							description={army.description}
						/>
					))}
				</>
			}


			<hr/>

			{/*{armies &&*/}
			{/*	<div>*/}
			{/*		{armies.map((army, index) => (*/}
			{/*			<div key={index}>*/}
			{/*				name: {army.name} <br/>*/}
			{/*				faction: {army.faction} <br/>*/}
			{/*				id: {army._id} <br/>*/}
			{/*				<Link href={`/army/${army._id}`}>*/}
			{/*					army link*/}
			{/*				</Link>*/}
			{/*			</div>*/}
			{/*		))}*/}
			{/*	</div>*/}
			{/*}*/}

			{armies.length === 0 &&
				<div>
					no army yet..
				</div>
			}

		</section>
	)
}

export default Dashboard