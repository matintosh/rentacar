import { Button } from "../../components/button";

import { Layout } from "../../components/layout";
import { getUser } from "../../lib/use-user";

export default function App({ user }: { user: any }) {
  console.log("user client");
  return (
    <Layout>
      <h2>Fiumba!</h2>
      <Button>Hacer reserva</Button>
    </Layout>
  );
}

export async function getServerSideProps(ctx: any) {
  const user = await getUser(ctx);
  console.log("USERR", user);

  return { props: { user } };
}
