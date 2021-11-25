import { getUserFromToken } from "lib/use-user";
import { NextRequest, NextResponse } from "next/server";
import { setCookie } from "nookies";
import { BRANCH_COOKIE_NAME } from "./cars/_middleware";

const checkAuth = (req: NextRequest) => {
  const cookies = req.cookies;
  const userToken = cookies.user_token;

  return userToken;
};

export async function middleware(req: NextRequest) {
  const token = checkAuth(req);
  if (!token) return NextResponse.redirect("/auth/login");

  const user = await getUserFromToken(token);
  if (!user) return NextResponse.redirect("/auth/login");

  const branch = user.self.branch.id;

  console.log("LA BRANCH!", branch);

  const res = NextResponse.rewrite(req.url);
  console.log("LA URL ", '/app/cars')

  if (req.cookies[BRANCH_COOKIE_NAME] !== branch) {
    console.log("SE CAMBIA LA BRANCH A!", branch);

    res.cookie(BRANCH_COOKIE_NAME, branch);

    return res;
  } else {
    return NextResponse.next();
  }
}
