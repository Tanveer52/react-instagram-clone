import AuthForm from "@/components/AuthForm";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

function AuthPage() {
  return (
    <Flex alignItems={"center"} justifyContent={"center"} minH={"100vh"} px={4}>
      {/* left side  */}
      <Box display={{ base: "none", md: "block" }}>
        <Image src="./public/auth.png" height={650} alt="auth image" />
      </Box>

      <AuthForm />
    </Flex>
  );
}

export default AuthPage;
