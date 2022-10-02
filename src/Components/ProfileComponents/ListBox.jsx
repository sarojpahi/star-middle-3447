import { Box } from "@chakra-ui/react";

export const ListBox = ({ text, onClick }) => {
  return (
    <Box
      w="full"
      p="6px 0 6px 6px"
      fontSize={"14px"}
      lineHeight="24px"
      display={"inline-block"}
      position="relative"
      bgPos={"95%"}
      bgImage={`url(https://www.jiomart.com/msassets/images/icons/keyboard_arrow_big_right.svg)`}
      bgRepeat="no-repeat"
      onClick={onClick}
      cursor="pointer"
    >
      {text}
    </Box>
  );
};
