import { useMutation } from "@apollo/client";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import type { NextPage } from "next";
import { useState } from "react";
import { Button } from "../../components/button";
import { Card } from "../../components/card";
import { Input } from "../../components/input";
import { setCookie } from "nookies";
import { useRouter } from "next/router";
import { LOGIN } from "graphql/mutations/login";

const Home: NextPage = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (data: any) => {
    setCookie({}, "user_token", data.login.jwt, { path: "/" });
    router.push("/app");
  };
  const [login, { loading, error, data }] = useMutation(LOGIN, {
    variables: { email, password },
    errorPolicy: "all",
    onCompleted: handleLogin,
  });

  return (
    <div>
      <Card>
        <Input
          icon={faUser}
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
        />
        <Input
          icon={faLock}
          placeholder='Password'
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}

        />

        <Button onClick={login}>Login</Button>
        {error && <p>Email or password incorrect</p>}
      </Card>
    </div>
  );
};

export default Home;
