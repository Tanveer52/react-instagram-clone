import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Flex,
  HStack,
  Text,
} from "@chakra-ui/react";

function ProfileHeader() {
  return (
    <Flex
      pt={20}
      gap={5}
      alignItems={"center"}
      justifyContent={"flex-start"}
      mb={5}
    >
      <AvatarGroup shape={"rounded"}>
        <Avatar src="../public/profilepic.png" size={"2xl"} />
      </AvatarGroup>
      <Box>
        <Flex alignItems={"center"}>
          <Text mr={5}>tanveerahmad.dev</Text>
          <Button
            size={"sm"}
            bg={"white"}
            color={"black"}
            _hover={{
              opacity: 0.8,
            }}
          >
            Edit Profile
          </Button>
        </Flex>
        <HStack mt={2}>
          <Flex>
            <Text mr={1} fontWeight={"bold"} fontSize={12}>
              4
            </Text>
            <Text fontSize={12}>Posts</Text>
          </Flex>
          <Flex>
            <Text mr={1} fontWeight={"bold"} fontSize={12}>
              149
            </Text>
            <Text fontSize={12}>Followers</Text>
          </Flex>
          <Flex>
            <Text mr={1} fontWeight={"bold"} fontSize={12}>
              168
            </Text>
            <Text fontSize={12}>Following</Text>
          </Flex>
        </HStack>
        <Text fontSize={12} fontWeight={"bold"} mt={2}>
          As a Programmer
        </Text>
        <Text fontSize={12} mt={2}>
          Tutorials that are meant to level up skills as a programmer
        </Text>
      </Box>
    </Flex>
  );
}

export default ProfileHeader;
