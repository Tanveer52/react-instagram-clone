import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useState } from "react";

function SignUp() {
  const [inputs, setInputs] = useState({
    email: "",
    username: "",
    fullName: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(true);

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
        placeholder="Username"
        type="text"
        fontSize={14}
        size={"sm"}
        onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
      />
      <Input
        placeholder="Full Name"
        type="text"
        fontSize={14}
        size={"sm"}
        onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
      />
      <InputGroup>
        <Input
          size={"sm"}
          placeholder="Password"
          type={showPassword ? "text" : "password"}
          fontSize={14}
          onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
        />
        <InputRightElement>
          <Button
            variant={"ghost"}
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
          </Button>
        </InputRightElement>
      </InputGroup>

      <Button w={"full"} colorScheme="blue">
        SignUp
      </Button>
    </>
  );
}

export default SignUp;
