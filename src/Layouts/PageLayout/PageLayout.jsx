import Navbar from "@/Components/NavBar/NavBar";
import SideBar from "@/Components/SideBar/SideBar";
import { auth } from "@/firebase/firebase";
import { useAuthStore } from "@/store/authStore";
import { Box, Flex } from "@chakra-ui/react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useLocation } from "react-router-dom";

function PageLayout({ children }) {
  const [user, loading] = useAuthState(auth);

  const { pathname } = useLocation();

  const authUser = useAuthStore((state) => state.user);
  const authPathname = pathname == "/auth";

  const canShowSideNav = authUser && !authPathname;
  const canShowNavBar = !user && !authPathname && !loading;

  return (
    <Flex direction={canShowNavBar ? "column" : "row"}>
      {/* left side  */}
      {canShowSideNav && (
        <Box w={{ base: "70px", md: "240px" }} h={"100vh"}>
          <SideBar />
        </Box>
      )}
      {canShowNavBar && <Navbar />}
      {/* right side  */}
      <Box flex={1}>{children}</Box>
    </Flex>
  );
}

export default PageLayout;
