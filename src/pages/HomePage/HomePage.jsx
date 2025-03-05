import PostsCard from "@/Components/PostsCard/PostsCard";
import { Container, Flex, Text } from "@chakra-ui/react";

function HomePage() {
  return (
    <Container maxWidth={"container.lg"}>
      <Flex>
        <PostsCard />
        <Text flex={2}>rIGHT SIDE</Text>
      </Flex>
    </Container>
  );
}

export default HomePage;
