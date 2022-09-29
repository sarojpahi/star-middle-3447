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
    <Box w="full" bg={"blackAlpha.50"} p="50px" h={"90vh"}>
      <Flex m={" auto"} w="80%">
        <Image
          src="https://www.jiomart.com/msassets/images/login-banner.jpg"
          borderLeftRadius={"20px"}
        ></Image>
        <Flex
          flexDirection={"column"}
          align="center"
          bg={"white"}
          w="full"
          gap={"80px"}
        >
          <VStack align={"flex-start"} mt="40px">
            <Heading>Sign in</Heading>
            <Text>Sign in to access your Orders, Offers and Wishlist.</Text>
          </VStack>
          <PhoneAuth></PhoneAuth>
        </Flex>
      </Flex>
      <Text textAlign={"center"} w="20%" fontSize={12} m="10px auto">
        By continuing you agree to our{" "}
        <Link color={"red"}>Terms of service</Link> and{" "}
        <Link color={"red"}>Privacy & Legal Policy</Link>.
      </Text>
    </Box>
  );
};
