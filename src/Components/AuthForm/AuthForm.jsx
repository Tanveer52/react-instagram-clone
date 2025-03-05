import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigation = useNavigate();

  const handleAuthSubmit = () => {
    if (!inputs.email || !inputs.password) {
      alert("You have to provide Email and Password");
      return;
    }

    navigation("/");
  };

  return (
    <>
      <Box border={"1px solid grey"} p={5}>
        <VStack spacing={4}>
          <Image src="../../public/logo.png" alt="Auth Page Image" />
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
          {!isLogin && (
            <Input
              placeholder="Confirm Password"
              type="password"
              fontSize={14}
              size={"sm"}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
          )}
          <Button w={"full"} colorScheme="blue" onClick={handleAuthSubmit}>
            {isLogin ? "Login" : "SignUp"}
          </Button>

          <Flex alignItems={"center"} justifyContent={"center"} w={"full"}>
            <Box flex={2} height={"1px"} bgColor={"white"}></Box>
            <Text mx={1}>OR</Text>
            <Box flex={2} height={"1px"} bgColor={"white"}></Box>
          </Flex>

          <Flex alignItems={"center"} gap={2} cursor={"pointer"}>
            <Image src="../../public/google.png" h={5} />
            <Text color={"blue.100"}>Login with Google</Text>
          </Flex>
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
