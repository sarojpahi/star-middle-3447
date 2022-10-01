import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

export const DetailBox = ({ text1, text2 }) => {
  return (
    <Box>
      <Text color={"rgba(0,0,0,.5)"} fontSize="12px" lineHeight={"16px"}>
        {text1}
      </Text>
      <Heading fontSize={"14px"} lineHeight="20px">
        {text2}
      </Heading>
    </Box>
  );
};
