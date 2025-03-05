import { Flex } from "@chakra-ui/react";
import ProfileTabs from "./ProfileTabs";
import ProfilePosts from "./ProfilePosts";

function ProfileFooter() {
  return (
    <Flex
      borderTop={"1px solid"}
      borderColor={"whiteAlpha.400"}
      flexDir={"column"}
    >
      <ProfileTabs />
      <ProfilePosts />
    </Flex>
  );
}

export default ProfileFooter;
