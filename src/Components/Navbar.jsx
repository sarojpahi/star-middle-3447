import {
  Box,
  Flex,
  HStack,
  Icon,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Slide,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { Loca } from "./NavComps/Loca";
import { BsPersonFill, BsFillCartFill } from "react-icons/bs";
import { Sidebar } from "./Sidebar";
import {
  Beauty,
  Electronics,
  Fashion,
  Groceries,
  HomeKitchen,
  Jewellery,
  PremiumFruits,
} from "./NavComps/Menus";
import { useContext } from "react";
import { AuthContext } from "../Contexts/UserAuth";
export const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const { user } = useContext(AuthContext);
  return (
    <>
      <Flex
        background={`#008ecc`}
        h="72px"
        maxW={"100%"}
        minw={["1030px"]}
        m="0px auto"
        boxSizing="boxderBox"
        align={"center"}
        justify={"center"}
        gap={"32px"}
      >
        <Box onClick={onToggle}>
          <HamburgerIcon
            color={"white"}
            w={"32px"}
            h="32px"
            cursor={"pointer"}
          />
        </Box>
        <Box w={"110px"}>
          <Link to="/">
            <Image src="https://www.jiomart.com/assets/version1662994539/smartweb/images/jiomart_logo_beta.svg"></Image>
          </Link>
        </Box>
        <InputGroup background={"white"} borderRadius={"10px"} maxW="72ch">
          <Input
            placeholder="Search essentials, groceries, and more …"
            type="search"
          ></Input>
          <InputRightElement>
            <Image
              src="https://www.jiomart.com/assets/version1662994539/smartweb/images/icons/list-view.svg"
              cursor={"pointer"}
            ></Image>
          </InputRightElement>
        </InputGroup>
        <Link to={"/customer/account/login"}>
          <HStack h="100%" color="white" cursor={"pointer"}>
            <Icon as={BsPersonFill} w="28px" h="32px"></Icon>
            <Text>{user.name ? user.name : "Sign in / Sign up"}</Text>
          </HStack>
        </Link>
        <Link path="/checkout/cart" to={"/checkout/cart"}>
          <HStack h="100%" color="white" cursor={"pointer"}>
            <Icon as={BsFillCartFill} w="20px" h="20px"></Icon>
            <Text>Cart</Text>
          </HStack>
        </Link>
      </Flex>
      <Flex
        background={`#ececed`}
        h="40px"
        maxW={"100%"}
        minw={["1030px"]}
        m="0px auto"
        boxSizing="boxderBox"
        align={"center"}
        justify={"center"}
        gap={"32px"}
      >
        <Loca />
        <Groceries />
        <PremiumFruits />
        <HomeKitchen />
        <Fashion />
        <Electronics />
        <Beauty />
        <Jewellery />
      </Flex>
      <Slide direction="left" in={isOpen} style={{ zIndex: 10 }}>
        <Sidebar shadow="md" onClick={onToggle} />
      </Slide>
    </>
  );
};
