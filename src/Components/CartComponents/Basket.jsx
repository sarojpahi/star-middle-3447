import { Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { changeNumber } from "../SubPages/DataSection";
import { NumberConvert } from "../HomeComponents/Data/NumberConvert";
import { BasketCard } from "./BasketCard";
import { v4 as uuidv4 } from "uuid";
export const Basket = ({ title, data }) => {
  const calctotal = () => {
    let sum = 0;
    data.forEach((el) => {
      sum += changeNumber(el["final-price"]) * el.qty;
    });
    return sum;
  };
  return (
    <VStack bg="white" w="full" key={uuidv4()}>
      <Flex justifyContent={"space-between"} w="full" key={uuidv4()} p="10px">
        <Flex align={"center"} gap="2px" key={uuidv4()}>
          <Heading
            fontSize={"18px"}
            lineHeight="22px"
            fontWeight={"bold"}
            key={uuidv4()}
          >
            {title} Basket
          </Heading>
          <Text key={uuidv4()}>({data.length} items)</Text>
        </Flex>
        <Text fontWeight={"bold"}>₹ {NumberConvert(calctotal())}</Text>
      </Flex>
      <VStack w="full" key={uuidv4()}>
        {data.map((item) => (
          <BasketCard item={item} key={uuidv4()} />
        ))}
      </VStack>
    </VStack>
  );
};
