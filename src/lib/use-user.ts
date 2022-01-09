import client from "../apollo-client";
import nookies from "nookies";
import { CURRENT_USER } from "graphql/queries/current-user";
import { AppConfig } from "utils/AppConfig";

export async function getUser(ctx: any) {
  const cookies = nookies.get(ctx);

  const user_token = cookies.user_token;

  if (!user_token) return null;

  return await getUserFromToken(user_token);
}

export async function getUserFromToken(token: string) {
  const data = await fetch(`${AppConfig.api_url}/graphql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify({
      query: `
      query getUser {
        self {
          id
          email
          username
          branch {
            id
          }
        }
      }
      `,
      variables: {
        now: new Date().toISOString(),
      },
    }),
  });

  const body = await data.json()


  return body.data;
}
