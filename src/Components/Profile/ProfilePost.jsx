import { Flex, GridItem, HStack, Image, Text } from "@chakra-ui/react";
import { AiFillHeart } from "react-icons/ai";
import { FaComment } from "react-icons/fa";

function ProfilePost({ item }) {
  return (
    <GridItem position={"relative"}>
      <Flex
        alignItems={"center"}
        justifyContent={"center"}
        bgColor={"blackAlpha.600"}
        position={"absolute"}
        opacity={0}
        _hover={{ opacity: 1, transition: "all 0.3s ease" }}
        top={0}
        left={0}
        right={0}
        bottom={0}
      >
        <HStack mr={10}>
          <Text>7</Text>
          <AiFillHeart />
        </HStack>
        <HStack>
          <Text>7</Text>
          <FaComment />
        </HStack>
      </Flex>
      <Image
        height={300}
        width={"full"}
        fit={"cover"}
        borderRadius={4}
        src={`../public/img${item}.png`}
      />
    </GridItem>
  );
}

export default ProfilePost;
