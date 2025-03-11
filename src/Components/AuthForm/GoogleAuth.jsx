import { Flex, Image, Text } from "@chakra-ui/react";

function GoogleAuth() {
  return (
    <Flex alignItems={"center"} gap={2} cursor={"pointer"}>
      <Image src="../../public/google.png" h={5} />
      <Text color={"blue.100"}>Login with Google</Text>
    </Flex>
  );
}

export default GoogleAuth;
