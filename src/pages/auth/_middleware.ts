import { getUserFromToken } from "lib/use-user";
import { NextRequest, NextResponse } from "next/server";

const checkAuth = (req: NextRequest) => {
  const cookies = req.cookies;
  const userToken = cookies.user_token;

  return userToken;
};

export async function middleware(req: NextRequest) {
  const token = checkAuth(req);

  if (!token) return NextResponse.next();
  // let user;
  // try {
  //   user = await getUserFromToken(token);
  // } catch (e) {
  //   console.log(e);
  // }

  // if (user) {
  return NextResponse.redirect("/app");
  // } else {
  // return NextResponse.next();
  // }
}
