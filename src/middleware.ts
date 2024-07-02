import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from "next/headers";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  if (cookies().has("token")) {
    return NextResponse.next();
  }
  return NextResponse.redirect(new URL("/signin", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/dashboard/:path*", "/pet/:path*", "/adoption-request/:path*"],
};
