// This is middleware.ts

import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Exclude Next.js special paths and API routes from redirects
  if (
    pathname.startsWith("/_next/image") || // Image Optimization API
    pathname.startsWith("/_next/static") // Next.js static files and chunks
    // Add additional file extensions as needed
    // pathname.endsWith('.css') || pathname.endsWith('.js') ...
  ) {
    return NextResponse.next();
  }

  // Redirect all other requests to the root
  if (pathname !== "/") {
    const url = req.nextUrl.clone();
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
