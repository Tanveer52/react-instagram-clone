import { Box, Flex, Image, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import GoogleAuth from "./GoogleAuth";

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <Box border={"1px solid grey"} p={5}>
        <VStack spacing={4}>
          <Image src="../../logo.png" alt="Auth Page Image" />
          {isLogin ? <Login /> : <SignUp />}
          <Flex alignItems={"center"} justifyContent={"center"} w={"full"}>
            <Box flex={2} height={"1px"} bgColor={"white"}></Box>
            <Text mx={1}>OR</Text>
            <Box flex={2} height={"1px"} bgColor={"white"}></Box>
          </Flex>

          <GoogleAuth />
        </VStack>
      </Box>
      <Box border={"1px solid grey"} p={5} my={3}>
        <Flex gap={2} cursor={"pointer"} onClick={() => setIsLogin(!isLogin)}>
          <Text>
            {isLogin ? "Don't have an account?" : "Already have an account?"}
          </Text>
          <Text color={"blue.100"}>{isLogin ? "SignUp" : "Login"}</Text>
        </Flex>
      </Box>
    </>
  );
}

export default AuthForm;
