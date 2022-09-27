import {
  Box,
  Center,
  Divider,
  Flex,
  HStack,
  Icon,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  MenuOptionGroup,
  Slide,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@chakra-ui/icons";
import { BsPersonFill, BsFillCartFill } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { Sidebar } from "./Sidebar";
export const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
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
          <Image src="https://www.jiomart.com/assets/version1662994539/smartweb/images/jiomart_logo_beta.svg"></Image>
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
        <HStack h="100%" color="white" cursor={"pointer"}>
          <Icon as={BsPersonFill} w="28px" h="32px"></Icon>
          <Text>Sign in / Sign up</Text>
        </HStack>
        <HStack h="100%" color="white" cursor={"pointer"}>
          <Icon as={BsFillCartFill} w="20px" h="20px"></Icon>
          <Text>Cart</Text>
        </HStack>
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
        <Box>
          <Icon as={HiLocationMarker} color="blackAlpha.700"></Icon>
        </Box>
        <Menu>
          {({ isOpen }) => (
            <>
              <MenuButton isActive={isOpen} rightIcon={isOpen}>
                Groceries {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
              </MenuButton>
              <MenuList
                display={"flex"}
                borderRadius="0"
                justifyContent={"center"}
                bg={`#ececed`}
              >
                <MenuOptionGroup w="50%">
                  <MenuItem _hover={{ bg: "white" }}>
                    Fruits &amp; Vegetables
                  </MenuItem>
                  <MenuItem _hover={{ bg: "white" }}>
                    Dairy &amp; Bakery
                  </MenuItem>
                  <MenuItem _hover={{ bg: "white" }}>Staples</MenuItem>
                  <MenuItem _hover={{ bg: "white" }}>
                    Snacks &amp; Branded Foods
                  </MenuItem>
                  <MenuItem _hover={{ bg: "white" }}>Beverages</MenuItem>
                  <MenuItem _hover={{ bg: "white" }}>Personal Care</MenuItem>
                </MenuOptionGroup>
                <Center w={1}>
                  <Divider orientation="vertical" w={"1px"} bg="grey" />
                </Center>
                <MenuOptionGroup w="50%">
                  <MenuItem _hover={{ bg: "white" }}>Home Care</MenuItem>
                  <MenuItem _hover={{ bg: "white" }}>
                    Home &amp; Kitchen
                  </MenuItem>
                  <MenuItem _hover={{ bg: "white" }}>
                    Mom &amp; Baby Care
                  </MenuItem>
                  <MenuItem _hover={{ bg: "white" }}>Pets</MenuItem>
                  <MenuItem _hover={{ bg: "white" }}>Beauty</MenuItem>
                </MenuOptionGroup>
              </MenuList>
            </>
          )}
        </Menu>
        <Menu>
          {({ isOpen }) => (
            <>
              <MenuButton isActive={isOpen} rightIcon={isOpen}>
                Premium Fruits{" "}
                {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
              </MenuButton>
              <MenuList
                display={"flex"}
                borderRadius="0"
                justifyContent={"center"}
                bg={`#ececed`}
              >
                <MenuOptionGroup w="50%">
                  <MenuItem _hover={{ bg: "white" }}>Apples & Pears</MenuItem>
                  <MenuItem _hover={{ bg: "white" }}>
                    Avocado, Peach, Plum
                  </MenuItem>
                  <MenuItem _hover={{ bg: "white" }}>
                    Banana, Melons & Coconut
                  </MenuItem>
                  <MenuItem _hover={{ bg: "white" }}>
                    Cherries, Berries & Exotic Fruits
                  </MenuItem>
                  <MenuItem _hover={{ bg: "white" }}>
                    Citrus, Mango & Grapes
                  </MenuItem>
                </MenuOptionGroup>
                <Center w={2}>
                  <Divider orientation="vertical" w={"1px"} bg="grey" />
                </Center>
                <MenuOptionGroup w="50%">
                  <MenuItem _hover={{ bg: "white" }}>Dates</MenuItem>
                  <MenuItem _hover={{ bg: "white" }}>
                    Gift, Assorted & XL Packs
                  </MenuItem>
                  <MenuItem _hover={{ bg: "white" }}>
                    Pomegranate, Papaya & Pineapple
                  </MenuItem>
                  <MenuItem _hover={{ bg: "white" }}>
                    Seasonal & Minor Fruits
                  </MenuItem>
                </MenuOptionGroup>
              </MenuList>
            </>
          )}
        </Menu>
        <Menu>
          {({ isOpen }) => (
            <>
              <MenuButton isActive={isOpen} rightIcon={isOpen}>
                Home & Kitchen{" "}
                {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
              </MenuButton>
              <MenuList
                display={"flex"}
                borderRadius="0"
                justifyContent={"center"}
                bg={`#ececed`}
              >
                <MenuOptionGroup w="50%">
                  <MenuItem _hover={{ bg: "white" }}>Kitchenware</MenuItem>
                  <MenuItem _hover={{ bg: "white" }}>Dining</MenuItem>
                  <MenuItem _hover={{ bg: "white" }}>Furnishing</MenuItem>
                  <MenuItem _hover={{ bg: "white" }}>Home Decor</MenuItem>
                  <MenuItem _hover={{ bg: "white" }}>Furniture</MenuItem>
                  <MenuItem _hover={{ bg: "white" }}>Home Appliances</MenuItem>
                  <MenuItem _hover={{ bg: "white" }}>
                    Toys, Games & Fitness
                  </MenuItem>
                  <MenuItem _hover={{ bg: "white" }}>Electrical</MenuItem>
                  <MenuItem _hover={{ bg: "white" }}>
                    Bathroom & Laundry Accessories
                  </MenuItem>
                  <MenuItem _hover={{ bg: "white" }}>Disposables</MenuItem>
                  <MenuItem _hover={{ bg: "white" }}>Stationery</MenuItem>
                </MenuOptionGroup>
                <Center w={2}>
                  <Divider orientation="vertical" w={"1px"} bg="grey" />
                </Center>
                <MenuOptionGroup w="50%">
                  <MenuItem _hover={{ bg: "white" }}>
                    Bags & Travel Luggage
                  </MenuItem>
                  <MenuItem _hover={{ bg: "white" }}>
                    Mops, Brushes & Scrubs
                  </MenuItem>
                  <MenuItem _hover={{ bg: "white" }}>Auto Care</MenuItem>
                  <MenuItem _hover={{ bg: "white" }}>Garden & Outdoor</MenuItem>
                  <MenuItem _hover={{ bg: "white" }}>
                    Carpentry & work accessories
                  </MenuItem>
                  <MenuItem _hover={{ bg: "white" }}>Pooja Needs</MenuItem>
                  <MenuItem _hover={{ bg: "white" }}>
                    Bathroom & Laundry
                  </MenuItem>
                  <MenuItem _hover={{ bg: "white" }}>
                    Industrial & Scientific Supplies
                  </MenuItem>
                  <MenuItem _hover={{ bg: "white" }}>
                    Home Safety & Automation
                  </MenuItem>
                  <MenuItem _hover={{ bg: "white" }}>
                    Kitchen & Bath Fixtures
                  </MenuItem>
                  <MenuItem _hover={{ bg: "white" }}>
                    Power & Hand Tools
                  </MenuItem>
                </MenuOptionGroup>
              </MenuList>
            </>
          )}
        </Menu>
        <Menu>
          {({ isOpen }) => (
            <>
              <MenuButton isActive={isOpen} rightIcon={isOpen}>
                Fashion {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
              </MenuButton>
              <MenuList borderRadius="0" bg={`#ececed`}>
                <MenuItem _hover={{ bg: "white" }}>Men</MenuItem>
                <MenuItem _hover={{ bg: "white" }}>Women</MenuItem>
                <MenuItem _hover={{ bg: "white" }}>Boys</MenuItem>
                <MenuItem _hover={{ bg: "white" }}>Girls</MenuItem>
                <MenuItem _hover={{ bg: "white" }}>Infants</MenuItem>
              </MenuList>
            </>
          )}
        </Menu>
        <Menu>
          {({ isOpen }) => (
            <>
              <MenuButton isActive={isOpen} rightIcon={isOpen}>
                Electronics {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
              </MenuButton>
              <MenuList borderRadius="0" bg={`#ececed`}>
                <MenuItem _hover={{ bg: "white" }}>Mobiles & Tablets</MenuItem>
                <MenuItem _hover={{ bg: "white" }}>TV & Speaker</MenuItem>
                <MenuItem _hover={{ bg: "white" }}>Home Appliances</MenuItem>
                <MenuItem _hover={{ bg: "white" }}>Computers</MenuItem>
                <MenuItem _hover={{ bg: "white" }}>Cameras</MenuItem>
                <MenuItem _hover={{ bg: "white" }}>Kitchen Appliances</MenuItem>
                <MenuItem _hover={{ bg: "white" }}>
                  Personal Care & Grooming
                </MenuItem>
                <MenuItem _hover={{ bg: "white" }}>Smart Devices</MenuItem>
                <MenuItem _hover={{ bg: "white" }}>Gaming</MenuItem>
                <MenuItem _hover={{ bg: "white" }}>Accessories</MenuItem>
                <MenuItem _hover={{ bg: "white" }}>Accessories</MenuItem>
                <MenuItem _hover={{ bg: "white" }}>Office Products</MenuItem>
                <MenuItem _hover={{ bg: "white" }}>
                  Health Care Devices
                </MenuItem>
                <MenuItem _hover={{ bg: "white" }}>
                  Electronic Musical Instruments
                </MenuItem>
              </MenuList>
            </>
          )}
        </Menu>
        <Menu>
          {({ isOpen }) => (
            <>
              <MenuButton isActive={isOpen} rightIcon={isOpen}>
                Beauty {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
              </MenuButton>
              <MenuList borderRadius="0" bg={`#ececed`}>
                <MenuItem _hover={{ bg: "white" }}>Make-Up</MenuItem>
                <MenuItem _hover={{ bg: "white" }}>Hair</MenuItem>
                <MenuItem _hover={{ bg: "white" }}>Skin Care</MenuItem>
                <MenuItem _hover={{ bg: "white" }}>Fragrances</MenuItem>
                <MenuItem _hover={{ bg: "white" }}>Personal Care</MenuItem>
                <MenuItem _hover={{ bg: "white" }}>Mom & Baby</MenuItem>
                <MenuItem _hover={{ bg: "white" }}>Men's Grooming</MenuItem>
                <MenuItem _hover={{ bg: "white" }}>Tools & Appliances</MenuItem>
                <MenuItem _hover={{ bg: "white" }}>Covid Essentials</MenuItem>
                <MenuItem _hover={{ bg: "white" }}>Wellness</MenuItem>
                <MenuItem _hover={{ bg: "white" }}>Fitness</MenuItem>
                <MenuItem _hover={{ bg: "white" }}>Ayush</MenuItem>
              </MenuList>
            </>
          )}
        </Menu>
        <Menu>
          {({ isOpen }) => (
            <>
              <MenuButton isActive={isOpen} rightIcon={isOpen}>
                Beauty {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
              </MenuButton>
              <MenuList borderRadius="0" bg={`#ececed`}>
                <MenuItem _hover={{ bg: "white" }}>Fine Jewellery</MenuItem>
                <MenuItem _hover={{ bg: "white" }}>Jewellery</MenuItem>
              </MenuList>
            </>
          )}
        </Menu>
      </Flex>
      <Slide direction="left" in={isOpen} style={{ zIndex: 10 }}>
        <Sidebar mt="4" rounded="md" shadow="md" onClick={onToggle} />
      </Slide>
    </>
  );
};
