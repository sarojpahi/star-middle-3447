import { Box, Flex, Text } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";
import { AddButton } from "./AddButton";

export const ProductCard2 = ({ data }) => {
  return (
    <Box
      key={uuidv4()}
      bg={"white"}
      w="full"
      display={["block", "block", "block", "none", "none", "none"]}
    >
      <Flex
        w="full"
        key={uuidv4()}
        border={["none", "1px solid rgba(111,114,132,.25)"]}
        borderRadius="5px"
        p="2"
        mr="10px"
        gap={2}
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
        <Box p={2} w="30%" m="auto" h="full">
          <img
            src={data["product-image-photo src"]}
            className="ImageItem"
            alt=""
          ></img>
        </Box>
        <Flex
          flexDirection={"column"}
          gap="8px"
          align={"flex-start"}
          mt="20px"
          w="full"
        >
          <Text
            w="full"
            className="text2line"
            fontSize={15}
            fontWeight={"bold"}
          >
            {data["item_name"]}
          </Text>
          <Box>
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
          <Flex
            align={"flex-end"}
            justifyContent={"flex-end"}
            key={uuidv4()}
            w="full"
            h="36px"
          >
            <Box mr="15px">
              <AddButton />
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};
