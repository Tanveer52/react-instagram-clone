import { Avatar, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";

function SuggestedUserCard({ name, followers, img }) {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleIsFollowing = () => {
    setIsFollowing(!isFollowing);
  };
  return (
    <Flex
      w={"full"}
      p={1}
      mb={2}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <HStack>
        <Avatar src={img} size={"lg"} mr={2} />
        <VStack align={"flex-start"}>
          <Text fontWeight={"bold"}>{name}</Text>
          <Text color={"gray.500"} fontSize={14}>
            {followers} followers
          </Text>
        </VStack>
      </HStack>
      <Text cursor={"pointer"} color={"blue.600"} onClick={handleIsFollowing}>
        {isFollowing ? "Unfollow" : "Follow"}
      </Text>
    </Flex>
  );
}

export default SuggestedUserCard;
