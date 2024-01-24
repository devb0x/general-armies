'use client'

import SignOutAction from "@/app/(users)/auth/signout/SignoutAction";

const ClientCompo = (props) => {
	return (
		<div>
			<SignOutAction deleteTokens={props.deleteTokens} />
			client compo
		</div>)
}

export default ClientCompo