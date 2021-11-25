import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

export const BRANCH_COOKIE_NAME = "user-branch"

export function middleware(req: NextRequest, ev: NextFetchEvent) {
    // console.log("EL MIDDLEWARE")
    // const cookieData = req.cookies?.[BRANCH_COOKIE_NAME]
  
    // const cookie = cookieData || '1';

    return NextResponse.rewrite(`/app/cars/1`);
  }