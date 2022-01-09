import { getUserFromToken } from "lib/use-user";
import { NextRequest, NextResponse } from "next/server";
import { BRANCH_COOKIE_NAME } from "./cars/_middleware";

const checkAuth = (req: NextRequest) => {
  const cookies = req.cookies;
  const userToken = cookies.user_token;

  return userToken;
};

export async function middleware(req: NextRequest) {
  const token = checkAuth(req);
  if (!token) return NextResponse.redirect("/auth/login");

  let user;
  try {
    user = await getUserFromToken(token);
  } catch (e) {
    console.log(e);
  }

  if (!user) return NextResponse.redirect("/auth/login");


  console.log(user)
  const branch = user.self.branch.id;

  const res = NextResponse.rewrite(req.url);

  if (req.cookies[BRANCH_COOKIE_NAME] !== branch) {
    res.cookie(BRANCH_COOKIE_NAME, branch);

    return res;
  } else {
    return NextResponse.next();
  }
}
