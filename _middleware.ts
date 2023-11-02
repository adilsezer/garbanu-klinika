// This is _middleware.ts in your Next.js project's root directory
import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  // Check if the request is for the root URL '/'
  if (req.nextUrl.pathname === "/") {
    // If it's the root URL, just continue with the request
    return NextResponse.next();
  }

  // If the request is for any other URL, redirect to the root URL
  const url = req.nextUrl.clone();
  url.pathname = "/";
  return NextResponse.redirect(url);
}
