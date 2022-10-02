import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
  Link,
} from "@chakra-ui/react";
import { PhoneAuth } from "../Contexts/PhoneAuth";
export const Login = () => {
  return (
    <Box w="full" bg={"blackAlpha.50"} maxH={"90vh"} mt="125px">
      <Flex
        pt={[0, 0, 0, 0, "50px", "50px"]}
        px={[0, 0, 0, 0, "50px", "50px"]}
        m={"auto"}
        mt={[0, 0, 0, "40px", "40px", "40px"]}
        w={["100%", "100%", "100%", "80%", "80%", "80%"]}
        flexDirection={["column", "column", "column", "row", "row", "row"]}
      >
        <Image
          h={{ md: "55vh" }}
          display={["none", "flex", "flex", "flex", "flex", "flex"]}
          src="https://www.jiomart.com/msassets/images/login-banner.jpg"
          borderLeftRadius={"20px"}
        ></Image>
        <Flex
          flexDirection={"column"}
          align="center"
          bg={"white"}
          w="full"
          gap={[5, 5, 5, 10, 10, "80px"]}
        >
          <VStack
            align={"flex-start"}
            mt="40px"
            w="full"
            px={["10px", "10px", "10px", "50px", "50px", 0]}
          >
            <Heading>Sign in</Heading>
            <Text>Sign in to access your Orders, Offers and Wishlist.</Text>
          </VStack>
          <PhoneAuth></PhoneAuth>
        </Flex>
      </Flex>
      <Flex mt="10px" align={"center"} pb="5px">
        <Text
          textAlign={"center"}
          w={["100%", "50%", "100%", "100%", "20%", "20%"]}
          fontSize={12}
          m="auto"
          px={2}
        >
          By continuing you agree to our{" "}
          <Link color={"red"}>Terms of service</Link> and{" "}
          <Link color={"red"}>Privacy & Legal Policy</Link>.
        </Text>
      </Flex>
    </Box>
  );
};
