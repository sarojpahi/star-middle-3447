import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { Basket } from "../Components/CartComponents/Basket";
import { Payment } from "../Components/CartComponents/Payment";
import { useCartContext } from "../Contexts/CartContext";

export const Cart = () => {
  const { cartItems, clearCartItem } = useCartContext();
  if (cartItems.length === 0) {
    return (
      <Box w="full" bg="blackAlpha.50">
        <Flex w="75%" mx="auto" pt="10px">
          <Flex w="60%" gap={"30px"} flexDirection="column">
            <Heading gap="4px" fontSize={"26px"}>
              My Cart
            </Heading>
            <Flex w="110%" h="80vh">
              <Flex w="full" align={"center"} justify="flex-end">
                <Box textAlign={"center"}>
                  <Image
                    w="100%"
                    src="https://www.jiomart.com/msassets/images/emptycart.svg"
                  ></Image>
                  <Text>Your Cart is empty!</Text>
                  <Flex textAlign={"center"} justify="center" gap="4px">
                    <Link to={"/"}>
                      <Text color="#008ecc">Continue Shopping</Text>
                    </Link>
                    <Text>at JioMart</Text>
                  </Flex>
                </Box>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    );
  }
  return (
    <Box w="full" bg="blackAlpha.50">
      <Flex w="75%" mx="auto" pt="10px">
        <Flex w="60%" gap={"30px"} flexDirection="column">
          <Heading gap="4px" fontSize={"26px"}>
            My Cart ({cartItems.length})
          </Heading>
          <VStack w="full">
            <Basket title="Groceries" data={cartItems} />
          </VStack>
        </Flex>
        <VStack w="36%" mx="auto" gap="30px">
          <Box>
            <Divider></Divider>
          </Box>
          <VStack w="full" gap="2" bg="white" p="15px">
            <Flex w="full" align={"center"} justify="space-between">
              <Text fontWeight={"bold"}>Apply Coupon</Text>
              <Text color="red">VIEW ALL</Text>
            </Flex>
            <InputGroup w="full">
              <InputLeftElement
                children={
                  <Image src="https://www.jiomart.com/msassets/images/icons/offer-grey.svg" />
                }
              />
              <Input type="text" placeholder="Enter Coupon Code" />
              <InputRightElement
                mr="10px"
                children={<Text cursor={"pointer"}>APPLY</Text>}
              />
            </InputGroup>
          </VStack>
          <Payment />
          <Flex justify="flex-end" w="full" pb="20px">
            <Button
              mt="-25px"
              p="5px 24px"
              color={"white"}
              _hover={{ bg: "#008edd" }}
              bg="#008ecc"
              onClick={() => {
                alert("Order Placed");
                clearCartItem();
              }}
            >
              Place Order
            </Button>
          </Flex>
        </VStack>
      </Flex>
    </Box>
  );
};
