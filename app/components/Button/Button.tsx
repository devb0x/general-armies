'use client'


const Button = (props, {createArmy}: {createArmy: () => void}) => {
	return (
		<button
			type="button"
			onClick={() => {
				createArmy()
			}}
		>
			{props.text}
		</button>
	)
}

export default Button