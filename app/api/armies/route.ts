// import connect from "../db"
// import { NextResponse } from "next/server"
// import Army from "../../models/army"
//
// export const GET = async (): Promise<any> => {
//
// 	try {
// 		await connect()
// 		return await Army.find()
// 	} catch (error) {
// 		return new NextResponse('error in creation' + error)
// 	}
//
// }
//
// export const GetArmyById = async (id): Promise<any> => {
//
// 	try {
// 		await connect()
// 		return await Army.findById(id)
// 	} catch (error) {
// 		return new NextResponse('error in creation' + error)
// 	}
//
// }