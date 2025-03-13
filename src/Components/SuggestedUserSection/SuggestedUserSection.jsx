import { Flex, HStack, Image, Spacer, Text, VStack } from "@chakra-ui/react";
import SuggestedUserCard from "./SuggestedUserCard";

function SuggestedUserSection() {
  const suggestedUsersData = [
    {
      name: "Dan Abrahmov",
      followers: 1392,
      img: "data:image/jpeg;base64,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",
    },
    {
      name: "Ryan Florence",
      followers: 567,
      img: "data:image/jpeg;base64,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",
    },
    {
      name: "Christian Nwamba",
      followers: 759,
      img: "data:image/jpeg;base64,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",
    },
  ];
  return (
    <VStack
      flex={2}
      mt={10}
      w={"full"}
      ml={10}
      display={{ base: "none", md: "block" }}
    >
      <Flex alignItems={"center"} justifyContent={"flex-start"} w={"full"}>
        <Image src="../profilepic.png" h={20} />
        <Text fontWeight={"bold"}>Tanveer Ahmad</Text>
        <Spacer />
        <Text color={"blue.500"} cursor={"pointer"}>
          Log out
        </Text>
      </Flex>
      <HStack w={"full"} justify={"space-between"} mb={5}>
        <Text color={"gray.500"}>Suggested for you</Text>
        <Text fontWeight={"bold"} cursor={"pointer"}>
          See All
        </Text>
      </HStack>
      {suggestedUsersData.map((user, index) => (
        <SuggestedUserCard
          key={index}
          name={user.name}
          followers={user.followers}
          img={user.img}
        />
      ))}
    </VStack>
  );
}

export default SuggestedUserSection;
