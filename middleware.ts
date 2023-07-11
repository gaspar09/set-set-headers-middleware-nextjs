import { NextRequest, NextResponse } from "next/server";

export const matcher = ["/header"];

export function middleware(request: NextRequest) {
  // Get the header from query string
  const header = request.nextUrl.searchParams.get("h") ?? "";

  request.headers.set("x-vercel-header-request", header);
  return NextResponse.rewrite(request.nextUrl, {
    headers: {
      "x-vercel-header-response": header,
    },
    request: {
      headers: request.headers,
    },
  });
}
