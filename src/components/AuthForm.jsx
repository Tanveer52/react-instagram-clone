import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  return (
    <Box border={"1px solid gray"} p={4}>
      <VStack>
        <Image src="./public/logo.png" />
        <Input placeholder="Email" type="email" />
        <Input placeholder="Password" type="password" />
        {!isLogin && <Input placeholder="Confirm Password" type="password" />}

        <Button width={"full"} colorScheme="blue">
          {isLogin ? "Log In" : "SignUp"}
        </Button>

        <Flex
          justifyContent={"stretch"}
          alignItems={"center"}
          style={{ backgroundColor: "red" }}
        >
          <Box bg="white" height={0.1} width={100}></Box>
          <Text p={2}>OR</Text>
          <Box bg="white" height={0.1} width={100}></Box>
        </Flex>
      </VStack>
    </Box>
  );
}

export default AuthForm;
