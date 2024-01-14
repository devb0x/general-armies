// import NextAuth from "next-auth"
// import GitHub from "next-auth/providers/github"
// import GoogleProvider from "next-auth/providers/google"
//
// import { MongoDBAdapter } from "@auth/mongodb-adapter"
// import clientPromise from "../api/mongodb"
//
// export const { handlers, auth } = NextAuth({
// 	providers:
// 		[
// 			GitHub({
// 				allowDangerousEmailAccountLinking: true,
// 			}),
// 			GoogleProvider({
// 				clientId: process.env.GOOGLE_ID,
// 				clientSecret: process.env.GOOGLE_SECRET,
// 				allowDangerousEmailAccountLinking: true,
// 			})
// 		],
// 	secret: process.env.NEXTAUTH_SECRET,
// 	adapter: MongoDBAdapter(clientPromise),
// 	callbacks: {
// 		async session({session, user}) {
// 			session.user.id = user.id
// 			return session
// 		}
// 	}
// })