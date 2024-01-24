import connect from "@/app/api/db"
import {NextResponse} from "next/server"
import Army from "@/app/models/army";

export const findRandomArmy = async () => {
	try {
		await connect()
	} catch (error) {
		return new NextResponse('error in creation' + error)
	}

	return Army.find().limit(-1).skip(1)
}

