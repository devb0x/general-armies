import React from "react"
import connect from '../app/api/db'

import {auth} from "@/app/utils/auth";
import ArmyCardLink from "@/app/components/ArmyCardLink/ArmyCardLink";
import {findRandomArmy} from "@/app/api/homepage/route"
import {addPost} from "@/app/utils/actions";


export default async function Home() {
	const army = await findRandomArmy()
	console.log(army)

	return (
		<main>
			<h1>This is the homepage</h1>
			<hr/>
			{army.map((army, index) => (
				<ArmyCardLink
					key={index}
					link={`/army/${army.id}`}
					name={army.name}
					faction={army.faction}
					description={army.description}
				/>

			))}
			<hr/>
			<form action={addPost}>
				<input type="text" placeholder="title" name="title"/>
				<input type="text" placeholder="desc" name="desc"/>
				<button type={"submit"}>Create</button>
			</form>
			<form action={addPost}>
				<input type="text" placeholder="title" name="title"/>
				<input type="text" placeholder="desc" name="desc"/>
				<button type={"submit"}>Create</button>
			</form>

		</main>
	)
}
