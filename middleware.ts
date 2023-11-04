import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Exclude Next.js image optimization API route, static files, and image files from redirects
  if (
    pathname.startsWith("/_next/image") || // Image Optimization API
    pathname.startsWith("/_next/static/") || // Next.js static files and chunks
    pathname.startsWith("/static/") || // Static files in the public/static folder
    pathname.match(/\.(jpg|jpeg|png|gif)$/i) // Image files
  ) {
    return NextResponse.next();
  }

  // Allow API routes to pass through the middleware without being redirected.
  if (pathname.startsWith("/api/")) {
    return NextResponse.next();
  }

  // Redirect all other requests to the root.
  if (pathname !== "/") {
    const url = req.nextUrl.clone();
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  // For all other paths, including the root "/", let the request proceed as normal.
  return NextResponse.next();
}
