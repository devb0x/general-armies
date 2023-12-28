import React from "react";
import {createArmyAction} from "@/app/utils/actions";

const newArmy:React.FC = () => {

	return (
		<>
			<h1>Create your new army</h1>

			<form
				action={createArmyAction}
				noValidate={true}
			>
				<fieldset>
					<label htmlFor="name">
						Army Name
					</label>
					<input
						type="text"
						id="name"
						name="name"
					/>
				</fieldset>
				<fieldset>
					<label htmlFor="faction">
						Faction
					</label>
					<input
						type="text"
						id="faction"
						name="faction"
					/>
				</fieldset>
				<fieldset>
					<label htmlFor="description">
						Description<span>optional</span>
					</label>
					<textarea
						id="description"
						name="description"
					/>
				</fieldset>
				<fieldset>
					<label htmlFor="lore">
						Lore<span>optional</span>
					</label>
					<textarea
						id="lore"
						name="lore"
					/>
				</fieldset>
				<button type="submit">
					confirm
				</button>
			</form>
		</>
	)
}

export default newArmy