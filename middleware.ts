import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  // For now, let's not do auth in middleware to avoid size issues
  // Auth will be handled at the page level instead
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|sign-in|assets).*)"],
};

// ⨯ [TypeError: Body is unusable: Body has already been read]
