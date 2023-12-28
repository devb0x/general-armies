import {GetArmyById} from "@/app/api/armies/route"

import styles from './armyId.module.css'

const armyId = async ( { params }) => {
	const army = await GetArmyById(params.armyId)

	return (
		<main className={`${styles['army']}`}>
			<header>
				<h1 className={`${styles['army-title']}`}>
					{army.name}
				</h1>
				<div className={`${styles['army-title__sub']}`}>
					{army.faction}
				</div>
				<div className={`${styles['army-title__sub']}`}>
					Author: {army.ownerId}
				</div>
			</header>

			<section className={`${styles['army-section']}`}>
				<h2 className={`${styles['army-section__title']}`}>Description</h2>
				<p className={`${styles['army-section__text']}`}>
					{army.description}
				</p>
			</section>

			<section className={`${styles['army-section']}`}>
				<h2 className={`${styles['army-section__title']}`}>Lore</h2>
				<p className={`${styles['army-section__text']}`}>{army.lore}</p>
			</section>

			<section className={`${styles['army-section']}`}>
				<h2 className={`${styles['army-section__title']}`}>Paints</h2>
				<ul>
					<li>paint#1</li>
					<li>paint#2</li>
					<li>paint#3</li>
				</ul>
			</section>

			<section className={`${styles['army-section']}`}>
				<h2 className={`${styles['army-section__title']}`}>Miniatures</h2>
				<div>
					Miniatures images..
				</div>
			</section>

		</main>
	)
}

export default armyId