import {
  Box,
  Divider,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Link,
  List,
  ListItem,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaRegUserCircle } from "@react-icons/all-files/fa/FaRegUserCircle";
import { IoMdClose } from "@react-icons/all-files/io/IoMdClose";
import { useContext } from "react";
import { AuthContext } from "../Contexts/UserAuth";
export const Sidebar = ({ shadow, onClick }) => {
  const { user } = useContext(AuthContext);
  return (
    <Box w="full">
      <Flex
        h={"100vh"}
        w={"350px"}
        position={"fixed"}
        top="0"
        left="0"
        flexDir="column"
        zIndex={999}
        shadow={shadow}
      >
        <VStack
          bg={"#008ecc"}
          h="92px"
          w="100%"
          color={"white"}
          p={2}
          justify="flex-start"
          align={"flex-start"}
        >
          <HStack fontSize={18} w="100%" justifyContent={"space-between"}>
            <Flex align={"center"} gap={4} mt={2}>
              <Icon as={FaRegUserCircle}></Icon>
              <Text> Hello, {user.name ? user.name : "Sign in"}</Text>
            </Flex>
            <Icon as={IoMdClose} cursor="pointer" onClick={onClick}></Icon>
          </HStack>
          <HStack>
            <Box border={"1px solid white"} p={1}>
              <Text px={12}>Account</Text>
            </Box>
            <Box border={"1px solid white"} p={1}>
              <Text px={12}>Orders</Text>
            </Box>
          </HStack>
        </VStack>
        <VStack
          overflowY={"scroll"}
          h="100vh"
          color={"blackAlpha.800"}
          w="100%"
          align={"flex-start"}
          bg="white"
        >
          <List p={3} spacing={3}>
            <ListItem>Home</ListItem>
            <ListItem>Shop by Category</ListItem>
            <ListItem>My List</ListItem>
            <ListItem>JioMart Wallet</ListItem>
            <ListItem>JioMart Gift Store</ListItem>
            <ListItem>JioMart Gift Card</ListItem>
            <ListItem>GoGreen with JioMart</ListItem>
            <ListItem>All Offers</ListItem>
          </List>
          <Box h={2} w="full" bg={"blackAlpha.400"}>
            <Divider orientation="horizontal"></Divider>
          </Box>
          <List p={3} spacing={3}>
            <ListItem>My Account</ListItem>
            <ListItem>Need Help</ListItem>
            <ListItem>About us</ListItem>
            <ListItem>Guide</ListItem>
          </List>
          <Box h={1} w="full" bg={"blackAlpha.400"}>
            <Divider orientation="horizontal"></Divider>
          </Box>
          <VStack align={"flex-start"} p={3}>
            <Heading>Contact Us</Heading>
            <HStack gap={2}>
              <Text>WhatsApp us :</Text>
              <Text color={"#008ecc"} textDecoration="underline">
                70003 70003
              </Text>
            </HStack>
            <Box>
              <HStack gap={2}>
                <Text> Call Us :</Text>
                <Text color={"#008ecc"} textDecoration="underline">
                  1800 890 1222
                </Text>
              </HStack>
              <Text>8:00 AM to 8:00 PM, 365 days</Text>
            </Box>

            <Text fontSize={10}>
              Please note that you are accessing the BETA Version of
              <Link href="www.jiomart.com" color={"#008ecc"}>
                {" "}
                www.jiomart.com
              </Link>
            </Text>
            <Text fontSize={10}>
              Should you encounter any bugs, glitches, lack of functionality,
              delayed deliveries, billing errors or other problems on the beta
              website, please email us on{" "}
              <Link color={"#008ecc"}>cs@jiomart.com</Link>
            </Text>
          </VStack>
          <VStack align={"flex-start"} p={3} gap={2}>
            <Heading>Download App</Heading>
            <HStack>
              <Image src="https://www.jiomart.com/images/cms/wysiwyg/app-icons/play_store.png"></Image>
              <Image src="https://www.jiomart.com/images/cms/wysiwyg/app-icons/ios_store.png"></Image>
            </HStack>
          </VStack>
          <Box></Box>
        </VStack>
      </Flex>
      <Box h={"100vh"} backdropFilter="blur(1px)"></Box>
    </Box>
  );
};
