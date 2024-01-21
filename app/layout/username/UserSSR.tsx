import {cookies} from "next/headers";

const UserSSR = () => {
	const cookieStore = cookies()
	// const theme = cookieStore.getAll()



	return cookieStore.getAll().map((cookie) => (
		<div key={cookie.name}>
			<p>Name: {cookie.name}</p>
			<p>Value: {cookie.value}</p>
		</div>
	))
}

export default UserSSR