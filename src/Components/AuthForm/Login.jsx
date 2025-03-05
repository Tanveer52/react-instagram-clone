import { Button, Input } from "@chakra-ui/react";
import { useState } from "react";

function Login() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  return (
    <>
      <Input
        size={"sm"}
        placeholder="Email"
        type="email"
        fontSize={14}
        onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
      />
      <Input
        size={"sm"}
        placeholder="Password"
        type="password"
        fontSize={14}
        onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
      />
      <Button w={"full"} colorScheme="blue">
        Login
      </Button>
    </>
  );
}

export default Login;
