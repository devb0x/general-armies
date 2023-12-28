import React from "react"

import Image from "next/image"
import Link from "next/link"

import styles from './armyCardLink.module.css'
import logo from './logo.png'

const ArmyCardLinks: React.FC = (
	props: {
		link,
		name,
		faction,
		description
	}
) => {

	return (
		<Link href={props.link}>
			<div className={`${styles['card']}`}>
				<Image
					src={logo}
					width={400}
					height={180}
					alt='army'
					className={`${styles['card-image']}`}
				/>
				<h3 className={`${styles['card-title']}`}>
					{props.name}
				</h3>
				<span className={`${styles['card-faction']}`}>{props.faction}</span>
				<p className={`${styles['card-description']}`}>{props.description}</p>
			</div>
		</Link>
	)
}

export default ArmyCardLinks