import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  Link,
  Spacer,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import {
  CreatePostLogo,
  InstagramLogo,
  InstagramMobileLogo,
  NotificationsLogo,
  SearchLogo,
} from "@/assets/constants";
import { AiFillHome } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import useLogout from "@/hooks/useLogout";

function SideBar() {
  const { handleLogout, loading } = useLogout();

  const sidebarItems = [
    {
      icon: <AiFillHome size={25} />,
      text: "Home",
      link: "/",
    },
    {
      icon: <SearchLogo />,
      text: "Search",
    },
    {
      icon: <NotificationsLogo />,
      text: "Notificatoins",
    },
    {
      icon: <CreatePostLogo />,
      text: "Create",
    },
    {
      icon: <Avatar size={"sm"} name="Tanveer Ahmad" src="./profilepic.png" />,
      text: "Profile",
      link: "/tanveerahmad",
    },
  ];
  return (
    <Flex
      flexDir={"column"}
      h={"full"}
      alignItems={"center"}
      gap={10}
      borderRight={"1px solid grey"}
      position={"fixed"}
      p={{ base: 0, md: 5 }}
      pt={{ base: 5, md: 5 }}
      top={0}
      left={0}
      bottom={0}
    >
      <Link
        as={RouterLink}
        to={"/auth"}
        display={{ base: "none", md: "block" }}
      >
        <InstagramLogo />
      </Link>
      <Link
        as={RouterLink}
        to={"/auth"}
        display={{ base: "block", md: "none" }}
      >
        <InstagramMobileLogo />
      </Link>

      <Flex
        flexDir={"column"}
        alignItems={{ base: "center", md: "flex-start" }}
      >
        {sidebarItems.map((item, index) => {
          return (
            <Tooltip
              key={index}
              showArrow
              content="This is the tooltip content"
              cursor={"pointer"}
            >
              <Link
                as={RouterLink}
                to={item.link || null}
                _hover={{ backgroundColor: "gray.500" }}
                p={5}
              >
                <HStack>
                  <Box mr={{ base: 0, md: 5 }}>{item.icon}</Box>
                  <Text display={{ base: "none", md: "block" }}>
                    {item.text}
                  </Text>
                </HStack>
              </Link>
            </Tooltip>
          );
        })}
      </Flex>
      <Spacer />

      <Tooltip
        showArrow
        content="This is the tooltip content"
        placement="right"
        mt={"auto"}
      >
        <HStack>
          <Button
            display={{ base: "none", md: "block" }}
            onClick={handleLogout}
            isLoading={loading}
          >
            <HStack>
              <BiLogOut size={25} />
              <Text>Logout</Text>
            </HStack>
          </Button>
        </HStack>
      </Tooltip>
    </Flex>
  );
}

export default SideBar;
