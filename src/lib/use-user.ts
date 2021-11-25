import client from "../apollo-client";
import nookies from "nookies";
import { CURRENT_USER } from "graphql/queries/current-user";

export async function getUser(ctx: any) {
  const cookies = nookies.get(ctx);

  const user_token = cookies.user_token;

  if (!user_token) return null;

  return await getUserFromToken(user_token);
}

export async function getUserFromToken(token: string) {
  console.log("TOKEN", token);

  const { data } = await client.query({
    context: {
      headers: {
        Authorization: "Bearer " + token,
      },
    },
    query: CURRENT_USER,
    fetchPolicy: "network-only",
  });

  return data;
}
