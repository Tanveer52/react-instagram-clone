import AuthForm from "@/Components/AuthForm/AuthForm";
import { Box, Container, Flex, Image, VStack } from "@chakra-ui/react";

function AuthPage() {
  return (
    <Flex minH={"100vh"} alignItems={"center"} justifyContent={"center"}>
      <Container maxW={"container.md"}>
        <Flex gap={5} alignItems={"center"} justifyContent={"center"}>
          <Image
            src="./public/auth.png"
            display={{ base: "none", md: "block" }}
            height={650}
            alt="Auth Page Image"
          />

          <VStack>
            <AuthForm />
            <Box textAlign={"center"}>Get the app.</Box>
            <Flex gap={5} justifyContent={"center"}>
              <Image src="./public/microsoft.png" h={10} />

              <Image src="./public/playstore.png" h={10} />
            </Flex>
          </VStack>
        </Flex>
      </Container>
    </Flex>
  );
}

export default AuthPage;
