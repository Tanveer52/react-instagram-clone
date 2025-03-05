import ProfileFooter from "@/Components/Profile/ProfileFooter";
import ProfileHeader from "@/Components/Profile/ProfileHeader";
import { Container, Flex } from "@chakra-ui/react";

function ProfilePage() {
  return (
    <Container maxW={"container.lg"} w={"full"}>
      <Flex flexDir={"column"}>
        <ProfileHeader />
        <ProfileFooter />
      </Flex>
    </Container>
  );
}

export default ProfilePage;
