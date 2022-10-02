import { Box, Text } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";
import { useCartContext } from "../../Contexts/CartContext";
import { AddButton } from "./AddButton";

export const ProductCard = ({ data }) => {
  const { onAdd } = useCartContext();
  return (
    <Box
      key={uuidv4()}
      bg={"white"}
      w="full"
      display={["none", "none", "none", "block", "block", "block  "]}
    >
      <Box
        key={uuidv4()}
        border={["none", "1px solid rgba(111,114,132,.25)"]}
        borderRadius="5px"
        p="2"
        mr="10px"
      >
        <Box
          key={uuidv4()}
          position={"absolute"}
          w="50px"
          h="50px"
          display={"flex"}
          justifyContent="center"
          alignItems={"center"}
          zIndex="5"
          bgImage={
            "https://www.jiomart.com/assets/version1664452279/jiomsite/images/icons/offer_bg.svg"
          }
          bgRepeat="no-repeat"
          bgPosition="center"
          bgSize={"cover"}
        >
          <Text color={"white"} fontSize="12px" textAlign={"center"} w="40px">
            {data["offer_value"]}
            <span style={{ fontSize: "10px" }}>%</span> OFF
          </Text>
        </Box>
        <Box p={2} w="full" height={"200px"} m="auto">
          <img
            src={data["product-image-photo src"]}
            className="ImageItem"
            alt=""
          ></img>
        </Box>
        <Box>
          <Text
            className="text2line"
            w="full"
            minH={"5ch"}
            fontSize={15}
            fontWeight={"bold"}
          >
            {data["item_name"]}
          </Text>
          <Text fontSize={17} fontWeight={"bold"}>
            {data["final-price"]}
          </Text>
          <Text fontSize={12}>
            M.R.P: <del>{data["price"]}</del>
          </Text>
          <Text fontSize={12} color="#00a100">
            {data["disc-price"]}
          </Text>
        </Box>
        <Box key={uuidv4()}>
          <AddButton onAdd={() => onAdd(data)} />
        </Box>
      </Box>
    </Box>
  );
};
