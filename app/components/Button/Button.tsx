'use client'


const Button = ({createArmy}: {createArmy: () => void}) => {
	return (
		<button
			type="button"
			onClick={() => {
				createArmy()
			}}
		>
			Create Army
		</button>
	)
}

export default Button