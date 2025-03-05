import { VStack } from "@chakra-ui/react";
import PostCard from "./PostCard";

function PostsCard() {
  const postsData = [
    {
      name: "Anglenia",
      img: "../../public/img1.png",
      likes: 1000,
      description: "Nature is healing 🌿",
      comments: 1000,
    },
    {
      name: "JohnDoe",
      img: "../../public/img2.png",
      likes: 850,
      description: "Enjoying the sunset 🌅",
      comments: 230,
    },
    {
      name: "SophiaM",
      img: "../../public/img3.png",
      likes: 1200,
      description: "Weekend vibes ✨",
      comments: 310,
    },
    {
      name: "MichaelR",
      img: "../../public/img4.png",
      likes: 920,
      description: "Chillin' with a coffee ☕",
      comments: 180,
    },
  ];

  return (
    <VStack flex={3} mt={10}>
      {postsData.map((post, index) => (
        <PostCard
          key={index}
          authorName={post.name}
          comments={post.comments}
          likes={post.likes}
          description={post.description}
          img={post.img}
        />
      ))}
    </VStack>
  );
}

export default PostsCard;
