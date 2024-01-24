import {cookies} from "next/headers";
import {deleteOneCookie} from "@/app/utils/actions";

export default async function checkCookies (data)  {
	'use server'
	console.log('check cookies called from helpers')
	const cookieStore = await cookies()
	return cookieStore.get(data)?.value
	// const res = cookieStore.get(data)?.value

	// return deleteOneCookie(res)
}

export async function deleteAllCookies(data) {
	// const cookieStore = await cookies()
	cookies().delete(data)
}
