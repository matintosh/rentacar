import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  console.log("Welcome to Rentacar");
  return NextResponse.next()
}
