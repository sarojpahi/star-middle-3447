import { Box, Flex, Image, Text } from "@chakra-ui/react";

export const ARButton = ({ text, onClick }) => {
  return (
    <Flex align={"center"} gap="4">
      <Box onClick={() => onClick(-1)} cursor="pointer">
        <Image src="https://www.jiomart.com/msassets/images/icons/minus-bulecolor.svg"></Image>
      </Box>
      <Text fontWeight={"medium"}>{text}</Text>
      <Box onClick={() => onClick(1)} cursor="pointer">
        <Image src="https://www.jiomart.com/msassets/images/icons/plus-bluecolor.svg"></Image>
      </Box>
    </Flex>
  );
};
