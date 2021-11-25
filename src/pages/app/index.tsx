import { Button } from "../../components/button";

import { Layout } from "../../components/layout";
import { getUser } from "../../lib/use-user";

export default function App({ user }: { user: any }) {
  console.log("user client");
  return (
    <Layout>
      My profile
      <ul>
        {user &&
          user.self &&
          Object.entries(user.self).map(([name, value]) => (
            <li key={name}></li>
          ))}
      </ul>
      <Button>Set cookie</Button>
    </Layout>
  );
}

export async function getServerSideProps(ctx: any) {
  const user = await getUser(ctx);
  console.log("USERR", user);

  return { props: { user } };
}
