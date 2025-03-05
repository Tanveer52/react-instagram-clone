import { Avatar, Flex, HStack, Text } from "@chakra-ui/react";
import { useState } from "react";

function PostHeader({ img, authorName }) {
  const [isFollowing, setIsFollowing] = useState(true);
  const handleUserFollow = () => {
    setIsFollowing(!isFollowing);
  };
  return (
    <Flex mb={2} justifyContent={"space-between"} alignItems={"center"}>
      <HStack>
        <Avatar src={img} size={"sm"} />
        <Text fontWeight={"bold"} fontSize={14}>
          {authorName}
        </Text>
        <Text color={"gray.500"}>• 1w</Text>
      </HStack>
      <Text
        onClick={handleUserFollow}
        cursor={"pointer"}
        color={"blue.300"}
        _hover={{
          color: "white",
        }}
      >
        {isFollowing ? "Unfollow" : "Follow"}
      </Text>
    </Flex>
  );
}

export default PostHeader;
