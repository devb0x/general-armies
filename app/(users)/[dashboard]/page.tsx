import React from "react"

import { getUserArmies } from "@/app/api/armies/route"
import ArmyCardLink from "@/app/components/ArmyCardLink/ArmyCardLink"
import {getCookie, getCookies} from "cookies-next";
import checkCookies, {deleteAllCookies} from "@/app/utils/helpers";
import {router} from "next/client";
import {redirect} from "next/navigation";
import {cookies} from "next/headers";
import {deleteOneCookie} from "@/app/utils/actions";

const Dashboard = async ({searchParams}) => {
	const userId = searchParams.user
	const userArmies = await getUserArmies(userId)

	const _id = await checkCookies('_id')
	// const cookies = await deleteAllCookies()

	if (_id !== userId) {
		console.log('delete all')
		console.log('different cookie  / path: _id = ' + _id + 'userId = ' + userArmies)
		// await deleteOneCookie('_id')

		redirect('/auth/signout')
		// return
	}

	// console.log('cookie user = ' + _id)
	// const user = cookiesStore('_id')


	return (
		<div>
			dashboard
			<hr/>
			{userArmies.map((army, index) => (
				<ArmyCardLink
					key={index}
					link={`/army/${army.id}`}
					name={army.name}
					faction={army.faction}
					description={army.description}
				/>
			))}
		</div>
	)
}

export default Dashboard