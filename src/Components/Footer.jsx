import React from "react";
import {
  Box,
  Divider,
  Flex,
  HStack,
  Image,
  Link,
  List,
  ListItem,
  Text,
  VStack,
} from "@chakra-ui/react";
export const Footer = () => {
  return (
    <Box w={"full"} bg="#ececed">
      <Flex w={"full"} justify={"space-around"} mb="10px">
        <Flex
          ml={[0, 0, 0, "50px", "50px", "50px"]}
          w={["100%", "100%", "100%", "70%", "70%", "80%"]}
          p={["15px", "15px", "15px", "50px", "50px"]}
          gap={["10px", "10px", "10px", "20%", "20%", "30%"]}
        >
          <VStack
            w="full"
            align={"flex-start"}
            display={["none", "none", "none", "flex", "flex", "flex"]}
          >
            <Text fontSize={12} color="black" fontWeight={"bold"}>
              MOST POPULAR CATEGORIES
            </Text>
            <List fontSize={12} color={"blackAlpha.700"}>
              <ListItem>Staples</ListItem>
              <ListItem>Beverages</ListItem>
              <ListItem>Personal Care</ListItem>
              <ListItem>Home Care</ListItem>
              <ListItem>Fruits and Vegetables</ListItem>
              <ListItem>Baby Care</ListItem>
              <ListItem>Snacks & Branded Foods</ListItem>
              <ListItem>Dairy & Bakery</ListItem>
            </List>
          </VStack>
          <VStack align={"flex-start"} w="full">
            <Text fontSize={12} color="black" fontWeight={"bold"}>
              CUSTOMER SERVICES
            </Text>
            <List fontSize={12} color={"blackAlpha.700"}>
              <ListItem>About Us</ListItem>
              <ListItem>FAQ</ListItem>
              <ListItem>Terms and conditions</ListItem>
              <ListItem>Home Care</ListItem>
              <ListItem>Privacy policy</ListItem>
              <ListItem>Baby Care</ListItem>
              <ListItem>E-waste Policy</ListItem>
              <ListItem>Cancellation and return policy</ListItem>
            </List>
          </VStack>
        </Flex>
        <Flex
          mt={["0px"]}
          pt={["15px", "15px", "15px", "50px", "50px"]}
          w={["full", "full", "full", "40%", "40%", "40%"]}
        >
          <HStack fontSize={12} align="flex-start">
            <Divider
              w="1px"
              bg={"grey"}
              orientation="vertical"
              mr="5px"
            ></Divider>
            <VStack
              align={"flex-start"}
              w={["full", "full", "full", "80%", "80%", "70%"]}
            >
              <Text fontSize={12} color="black" fontWeight={"bold"}>
                CONTACT US
              </Text>
              <HStack>
                <Text>WhatsApp us :</Text>
                <Text color={"#008ecc"}>70003 70003</Text>
              </HStack>
              <Box>
                <HStack>
                  <Text> Call Us :</Text>
                  <Text color={"#008ecc"}>1800 890 1222</Text>
                </HStack>
                <Text>8:00 AM to 8:00 PM, 365 days</Text>
              </Box>

              <Text
                fontSize={12}
                w={["80%", "80%", "80%", "80%", "80%", "70%"]}
              >
                Please note that you are accessing the BETA Version of
                <Link
                  href="www.jiomart.com"
                  color={"#008ecc"}
                  textDecoration="none"
                >
                  {" "}
                  www.jiomart.com
                </Link>
              </Text>
              <Text
                fontSize={12}
                w={["80%", "80%", "80%", "80%", "80%", "70%"]}
              >
                Should you encounter any bugs, glitches, lack of functionality,
                delayed deliveries, billing errors or other problems on the beta
                website, please email us on{" "}
                <Link color={"#008ecc"} textDecoration="none">
                  cs@jiomart.com
                </Link>
              </Text>
              <VStack
                align={"flex-start"}
                display={["none", "none", "none", "flex", "flex", "flex"]}
                gap={1}
              >
                <Text fontSize={12} color="black" fontWeight={"bold"}>
                  DOWNLOAD APP
                </Text>
                <HStack gap={2}>
                  <Image src="https://www.jiomart.com/images/cms/wysiwyg/app-icons/play_store.png"></Image>
                  <Image src="https://www.jiomart.com/images/cms/wysiwyg/app-icons/ios_store.png"></Image>
                </HStack>
              </VStack>
            </VStack>
          </HStack>
        </Flex>
      </Flex>
      <VStack align={"flex-start"} ml="20px">
        <VStack
          align={"flex-start"}
          display={["flex", "flex", "flex", "none", "none", "none"]}
        >
          <Text fontSize={12} color="black" fontWeight={"bold"}>
            DOWNLOAD APP
          </Text>
          <HStack gap={2}>
            <Image src="https://www.jiomart.com/images/cms/wysiwyg/app-icons/play_store.png"></Image>
            <Image src="https://www.jiomart.com/images/cms/wysiwyg/app-icons/ios_store.png"></Image>
          </HStack>
        </VStack>
        <Divider h="1px" bg={"grey"} orientation="horizontal" w="95%"></Divider>
        <HStack justify={"space-around"} fontSize={12} w="full" pb="20px">
          <Text display={["none", "none", "none", "flex", "flex", "flex"]}>
            Best viewed on Microsoft Edge 81+, Mozilla Firefox 75+, Safari
            5.1.5+, Google Chrome 80+
          </Text>
          <Text>© 2022 All rights reserved. Reliance Retail Ltd</Text>
        </HStack>
      </VStack>
    </Box>
  );
};
