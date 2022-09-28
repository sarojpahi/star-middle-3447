import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Button,
  ButtonGroup,
  useDisclosure,
  IconButton,
  Text,
  Box,
} from "@chakra-ui/react";

import { HiLocationMarker } from "react-icons/hi";
export const Loca = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();

  return (
    <>
      <Popover
        returnFocusOnClose={false}
        isOpen={isOpen}
        onClose={onClose}
        closeOnBlur={false}
      >
        <PopoverTrigger>
          <IconButton
            icon={<HiLocationMarker />}
            bg="none"
            outline={"none"}
            _hover={{ bg: "none" }}
            cursor={"auto"}
          />
        </PopoverTrigger>
        <Box
          bg="none"
          outline={"none"}
          cursor={"auto"}
          display="flex"
          flexDirection={"column"}
          w="50px"
          fontSize={10}
          ml="-9"
        >
          Deliver to
          <Text
            onClick={onToggle}
            cursor="pointer"
            fontSize={12}
            fontWeight="black"
          >
            400020
          </Text>
        </Box>

        <PopoverContent>
          <PopoverHeader fontWeight="semibold">Confirmation</PopoverHeader>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody>
            Are you sure you want to continue with your action?
          </PopoverBody>
          <PopoverFooter display="flex" justifyContent="flex-end">
            <ButtonGroup size="sm">
              <Button variant="outline">Cancel</Button>
              <Button colorScheme="red">Apply</Button>
            </ButtonGroup>
          </PopoverFooter>
        </PopoverContent>
      </Popover>
    </>
  );
};
