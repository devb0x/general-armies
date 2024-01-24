import { NextResponse } from 'next/server';

export default function middleware(req) {
	console.log('middleware in rot folder')
	// let loggedin = req.cookies.get('_id');
	// const { pathname } = req.nextUrl;
	//
	// if (loggedin && pathname === '/auth/account') {
	// 	return NextResponse.redirect(new URL('/dashboard', req.url));
	// }
	//
	// if (!loggedin && pathname !== '/auth/account') {
	// 	return NextResponse.redirect(new URL('/auth/account', req.url));
	// }
}

export const config = {
	matcher: '/((?!api|static|.*\\..*|_next).*)',
};