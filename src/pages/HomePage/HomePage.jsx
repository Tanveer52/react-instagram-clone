import PostsCard from "@/Components/PostsCard/PostsCard";
import SuggestedUserSection from "@/Components/SuggestedUserSection/SuggestedUserSection";
import { Container, Flex } from "@chakra-ui/react";

function HomePage() {
  return (
    <Container maxWidth={"container.lg"}>
      <Flex>
        <PostsCard />
        <SuggestedUserSection />
      </Flex>
    </Container>
  );
}

export default HomePage;
