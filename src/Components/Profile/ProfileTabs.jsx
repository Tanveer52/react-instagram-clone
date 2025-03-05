import { Flex, HStack, Text } from "@chakra-ui/react";
import "react";
import { BsBookmark, BsGrid3X3, BsSuitHeart } from "react-icons/bs";

function ProfileTabs() {
  return (
    <Flex justifyContent={"center"} gap={5} textTransform={"uppercase"}>
      <HStack borderTop={"1px solid white"} p={2}>
        <BsGrid3X3 />
        <Text fontSize={12}>Posts</Text>
      </HStack>
      <HStack p={2}>
        <BsBookmark />
        <Text fontSize={12}>Saved</Text>
      </HStack>
      <HStack p={2}>
        <BsSuitHeart />
        <Text fontSize={12}>Likes</Text>
      </HStack>
    </Flex>
  );
}

export default ProfileTabs;
