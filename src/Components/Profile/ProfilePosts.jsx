import { Grid, Image, Skeleton, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";

function ProfilePosts() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);
  return (
    <Grid
      mt={5}
      ml={{ base: "4", md: "0" }}
      gap={5}
      my={5}
      templateColumns={{
        sm: "repeat(1,1fr)",
        md: "repeat(3,1fr)",
      }}
    >
      {isLoading &&
        [0, 1, 2, 3, 4, 5].map((item, index) => (
          <Stack key={index} gap="5">
            <Skeleton height="300px" />
          </Stack>
        ))}
      {!isLoading &&
        [1, 2, 3, 4].map((item, index) => (
          <Image
            key={index}
            height={300}
            width={"full"}
            fit={"cover"}
            borderRadius={4}
            src={`../public/img${item}.png`}
          />
        ))}
    </Grid>
  );
}

export default ProfilePosts;
