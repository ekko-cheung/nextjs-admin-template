import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { auth } from "../auth";
 
export async function middleware(request: NextRequest) {
    const session = await auth.api.getSession({
        headers: await headers()
    })
 
    if(!session) {
        return NextResponse.redirect(new URL("/signin", request.url));
    }
 
    return NextResponse.next();
}
 
export const config = {
  runtime: "nodejs",
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)', '/:path*'], // Apply middleware to specific routes
};