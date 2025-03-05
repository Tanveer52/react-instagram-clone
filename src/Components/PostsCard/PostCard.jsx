import {
  Box,
  HStack,
  Image,
  Skeleton,
  SkeletonCircle,
  Stack,
} from "@chakra-ui/react";
import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";
import { useEffect, useState } from "react";

function PostCard({ authorName, img, likes, comments, description }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <Box w={"full"} my={5}>
      {isLoading && (
        <Box>
          <HStack gap="5">
            <SkeletonCircle size="12" />
            <Stack flex="1">
              <Skeleton height="5" width="100%" />
            </Stack>
          </HStack>
          <Skeleton height="400px" width="100%" mt={2} />
        </Box>
      )}
      {!isLoading && (
        <>
          <PostHeader authorName={authorName} img={img} />
          <Image src={img} borderRadius={4} />
          <PostFooter
            likes={likes}
            authorName={authorName}
            description={description}
            comments={comments}
          />
        </>
      )}
    </Box>
  );
}

export default PostCard;
