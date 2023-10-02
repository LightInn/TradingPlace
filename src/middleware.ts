// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getUserFromCookie } from '@/lib/getUserFromCookie'

export async function middleware(request: NextRequest) {

	let cookie = request.cookies.get('pb_auth')

	const user = await getUserFromCookie(cookie)

	console.log(user)

	if (request.nextUrl.pathname == '/' && user) {
		return NextResponse.redirect(new URL('/app', request.url))
	}
	if (request.nextUrl.pathname.startsWith('/app') && !user) {
		return NextResponse.redirect(new URL('/', request.url))
	}
	if (request.nextUrl.pathname.startsWith('/auth/profile') && !user) {
		return NextResponse.redirect(new URL('/', request.url))
	}
	if (request.nextUrl.pathname.startsWith('/auth/login') && user) {
		return NextResponse.redirect(new URL('/app', request.url))
	}
	if (request.nextUrl.pathname.startsWith('/auth/register') && user) {
		return NextResponse.redirect(new URL('/app', request.url))
	}
}