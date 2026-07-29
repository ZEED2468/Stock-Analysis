import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
    const sessionCookie = request.cookies.get("better-auth.session_token")?.value || 
                          request.cookies.get("__Secure-better-auth.session_token")?.value;
    const { pathname } = request.nextUrl;

    // Allow access to public routes without authentication
    const publicRoutes = ['/', '/sign-in', '/sign-up', '/landing'];
    
    // If it's a public route, allow access
    if (publicRoutes.includes(pathname)) {
        // If user is authenticated and trying to access sign-in/sign-up, redirect to dashboard
        if (sessionCookie && (pathname === '/sign-in' || pathname === '/sign-up')) {
            return NextResponse.redirect(new URL("/dashboard", request.url));
        }
        return NextResponse.next();
    }

    // For protected routes (like /dashboard), require authentication
    if (!sessionCookie) {
        return NextResponse.redirect(new URL("/sign-in", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico|assets).*)',
    ],
};
