import {
  Box,
  Divider,
  Flex,
  Heading,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useCartContext } from "../../Contexts/CartContext";
import { NumberConvert } from "../HomeComponents/Data/NumberConvert";
import { changeNumber } from "../SubPages/DataSection";
import { ARButton } from "./ARButton";
export const BasketCard = ({ item }) => {
  const { onAdd, onRemove } = useCartContext();
  const [finalprice, setFinalprice] = useState(
    changeNumber(item["final-price"]) * item.qty
  );
  const [mrp, setMrp] = useState(changeNumber(item["price"]) * item.qty);
  const [save, setSave] = useState(changeNumber(item["disc-price"]) * item.qty);
  const handleCount = (change) => {
    if (change > 0) onAdd(item);
    if (change < 0) onRemove(item);
    const finalprice = changeNumber(item["final-price"]) * item.qty;
    const Price = changeNumber(item["price"]) * item.qty;
    const discprice = changeNumber(item["disc-price"]) * item.qty;

    setFinalprice(finalprice);
    setMrp(Price);
    setSave(discprice);
  };

  return (
    <Box w="full" key={uuidv4()}>
      <Flex p="15px" w="full" gap="4px">
        <Flex align={"center"}>
          <Image
            w="100%"
            src={item["product-image-photo src"]}
            objectFit="contain"
          ></Image>
        </Flex>
        <Box p="5px" w="full">
          <Heading
            className="text2line"
            fontSize={"16px"}
            w="full"
            ml="0"
            lineHeight="24px"
          >
            {item["item_name"]}
          </Heading>
          <Flex gap="5px" fontSize={"12px"} lineHeight="20px" w="full">
            <Text fontWeight={"bold"}>₹ {NumberConvert(finalprice)}</Text>
            <Text>
              <del>₹ {NumberConvert(mrp)}</del>
            </Text>
            <Text color="#00a100">You Save ₹ {NumberConvert(save)}</Text>
          </Flex>
          <Link color={"#008ecc"} href={item["product-link href"]}>
            More Details
          </Link>
          <Text>SAVE FOR LATER</Text>
          <Flex justifyContent="flex-end">
            <ARButton text={item.qty} onClick={handleCount} />
          </Flex>
        </Box>
      </Flex>
      <Divider />
    </Box>
  );
};
