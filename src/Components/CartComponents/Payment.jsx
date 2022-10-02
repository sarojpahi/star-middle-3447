import { Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { useCartContext } from "../../Contexts/CartContext";
import { NumberConvert } from "../HomeComponents/Data/NumberConvert";
import { changeNumber } from "../SubPages/DataSection";
export const Payment = () => {
  const { cartItems } = useCartContext();
  var totalDis = cartItems.reduce(
    (total, el) => total + el.qty * changeNumber(el["disc-price"]),
    0
  );
  var totalMrp = cartItems.reduce(
    (total, el) => total + el.qty * changeNumber(el["price"]),
    0
  );
  var totalPrice = cartItems.reduce(
    (total, el) => total + el.qty * changeNumber(el["final-price"]),
    0
  );
  var totalSave = totalMrp - totalDis;
  return (
    <VStack w="full" bg="white" align={"flex-start"} p="15px">
      <Heading mb="15px">Payment Details</Heading>
      <Flex
        borderBottom={"1px solid lightgray"}
        align={"center"}
        justify="space-between"
        w="full"
        pb="3px"
      >
        <Text>MRP Total</Text>
        <Text>₹{totalMrp ? NumberConvert(totalMrp) : 0}</Text>
      </Flex>
      <Flex
        borderBottom={"1px solid lightgray"}
        align={"center"}
        justify="space-between"
        w="full"
        pb="3px"
      >
        <Text>Product Discount</Text>
        <Text>- ₹{totalDis ? NumberConvert(totalDis) : 0}</Text>
      </Flex>
      <Flex
        align={"center"}
        justify="space-between"
        w="full"
        pb="3px"
        fontWeight={"bold"}
      >
        <Text>Product Discount</Text>
        <Text>₹{totalDis ? NumberConvert(totalPrice) : 0}</Text>
      </Flex>
      <Flex
        align={"center"}
        justify="flex-end"
        color={"#00a100"}
        w="full"
        pb="3px"
      >
        <Text>You Save ₹{totalDis ? NumberConvert(totalSave) : 0}</Text>
      </Flex>
    </VStack>
  );
};
