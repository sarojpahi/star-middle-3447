import { Button } from "@chakra-ui/react";
export const AddButton = () => {
  return (
    <Button
      w="full"
      bg={"#008ecc"}
      h="36px"
      borderRadius={"4px"}
      lineHeight="36px"
      border={0}
      color="white"
      fontSize={"14px"}
      mt="5px"
      _hover={{ background: "#008ecc" }}
    >
      Add to Cart
    </Button>
  );
};
