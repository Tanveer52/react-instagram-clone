import SideBar from "@/Components/SideBar/SideBar";
import { Box, Flex } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

function PageLayout({ children }) {
  const { pathname } = useLocation();

  return (
    <Flex>
      {/* left side  */}
      {pathname != "/auth" && (
        <Box w={{ base: "70px", md: "240px" }} h={"100vh"}>
          <SideBar />
        </Box>
      )}
      {/* right side  */}
      <Box flex={1}>{children}</Box>
    </Flex>
  );
}

export default PageLayout;
