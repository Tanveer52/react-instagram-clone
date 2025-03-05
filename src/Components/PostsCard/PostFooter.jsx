import { CommentLogo, NotificationsLogo, UnlikeLogo } from "@/assets/constants";
import {
  Box,
  Button,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

function PostFooter({ likes, authorName, description, comments }) {
  const [isLiked, setIsLiked] = useState(false);
  const [postLikes, setPostLikes] = useState(likes);

  const handleIsLiked = () => {
    setIsLiked(!isLiked);
    console.log(isLiked);
    if (isLiked) {
      setPostLikes(postLikes - 1);
    } else {
      setPostLikes(postLikes + 1);
    }
  };

  return (
    <Box mt={2}>
      <HStack>
        <Box onClick={handleIsLiked}>
          {isLiked ? <UnlikeLogo /> : <NotificationsLogo />}
        </Box>
        <CommentLogo />
      </HStack>
      <Text fontSize={12} color={"gray.300"} mt={2}>
        {postLikes} Likes
      </Text>
      <HStack align={"start"}>
        <Text fontWeight={"bold"} fontSize={12}>
          {authorName}
        </Text>
        <Text fontSize={12}> {description}</Text>
      </HStack>

      <Text fontSize={12} mt={1} cursor={"pointer"} color={"gray.500"}>
        View all {comments} comments
      </Text>

      <InputGroup>
        <Input placeholder="Give your thoughts" variant={"flushed"} mt={1} />
        <InputRightElement>
          <Button variant={"ghost"}>Post</Button>
        </InputRightElement>
      </InputGroup>
    </Box>
  );
}

export default PostFooter;
