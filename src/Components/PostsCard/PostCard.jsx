import { Box, Image } from "@chakra-ui/react";
import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";

function PostCard({ authorName, img, likes, comments, description }) {
  return (
    <Box w={"full"} my={5}>
      <PostHeader authorName={authorName} img={img} />
      <Image src={img} borderRadius={4} />
      <PostFooter
        likes={likes}
        authorName={authorName}
        description={description}
        comments={comments}
      />
    </Box>
  );
}

export default PostCard;
