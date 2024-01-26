import React from "react"

// import ArmyCardLink from "@/app/components/ArmyCardLink/ArmyCardLink";
import {addPost} from "@/app/utils/actions";
import {findRandomArmy} from "@/app/api/homepage/route";
import ArmyCardLink from "@/app/components/ArmyCardLink/ArmyCardLink";
import Spinner from "@/app/components/Spinner/Spinner";

export default async function Home(props) {
	const army = await findRandomArmy()
	// console.log(army)

	return (

		<main>
			<h1>This is the homepage</h1>
			<Spinner />
			{/*<hr/>*/}
			{/*{army.map((army, index) => (*/}
			{/*	<ArmyCardLink*/}
			{/*		key={index}*/}
			{/*		link={`/army/${army.id}`}*/}
			{/*		name={army.name}*/}
			{/*		faction={army.faction}*/}
			{/*		description={army.description}*/}
			{/*	/>*/}

			{/*))}*/}
			<hr/>
			<form action={addPost}>
				<input type="text" placeholder="title" name="title"/>
				<input type="text" placeholder="desc" name="desc"/>
				<button type={"submit"}>Create</button>
			</form>

		</main>
	)
}
