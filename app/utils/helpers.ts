import {cookies} from "next/headers";

export default async function checkCookies (data)  {
	console.log('check cookies called from helpers')
	const cookieStore = await cookies()
	return cookieStore.get(data)?.value
}
