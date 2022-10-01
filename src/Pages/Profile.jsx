import {
  Box,
  Divider,
  Flex,
  Heading,
  HStack,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { DetailBox } from "../Components/ProfileComponents/DetailBox";
import { ListBox } from "../Components/ProfileComponents/ListBox";
import { ProfileEdit } from "../Components/ProfileComponents/ProfileEdit";
export const Profile = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <Box bg={"blackAlpha.50"} w="100%">
      <Box w={["full", "full", "95%", "90%", "80%", "80%"]} mx="auto" py="10px">
        <Box display={["none", "none", "none", "block", "block", "block"]}>
          <Heading fontSize={30} pl="5">
            My Account
          </Heading>
        </Box>
        <Flex mt={"10px"} w="100%" mx="auto">
          <VStack
            w={["full", "full", "50%", "40%", "40%", "40%"]}
            align={"flex-start"}
            gap={[0, 0, "40px", "40px", "40px"]}
            mx="auto"
          >
            <VStack
              bg="#008ecc"
              w="full"
              h="235px"
              p="26px 24px 24px"
              borderRadius={[0, 0, "8px"]}
            >
              <Box w="full">
                <HStack gap={5}>
                  <Box>
                    <img
                      src="https://www.jiomart.com/msassets/images/icons/profile_white.svg"
                      alt=""
                    />
                  </Box>
                  <Flex justify={"space-between"} align="center" w="full">
                    <Box h="58px" textAlign={"left"} m="0">
                      <Heading fontSize={20} color="white" lineHeight={"20px"}>
                        Saroj Pahi
                      </Heading>
                      <Text
                        fontSize={12}
                        fontStyle="italic"
                        color={"hsla(0,0%,100%,.4)"}
                        lineHeight="16px"
                      >
                        sarojpahi@gmail.com
                      </Text>
                      <Text
                        fontSize={12}
                        color={"hsla(0,0%,100%,.4)"}
                        lineHeight="16px"
                      >
                        +91-8249816465
                      </Text>
                    </Box>
                    <Box
                      w="32px"
                      h="32px"
                      onClick={onOpen}
                      display={[
                        "block",
                        "block",
                        "none",
                        "none",
                        "none",
                        "none",
                      ]}
                    >
                      <img
                        src="https://www.jiomart.com/msassets/images/icons/edit_white.svg"
                        alt=""
                      />
                    </Box>
                  </Flex>
                </HStack>
                <HStack mt="25px" w="full">
                  <Flex
                    w="full"
                    bg={"hsla(0,0%,100%,.4)"}
                    bgImage={`url(https://www.jiomart.com/msassets/images/icons/credit_card.svg)`}
                    bgRepeat="no-repeat"
                    bgPos={"12px 12px"}
                    p="14px 12px 14px 48px"
                    align={"center"}
                    color={"white"}
                    h="48px"
                    borderRadius={"5px"}
                  >
                    Payment Methods
                  </Flex>
                  <Flex
                    w="full"
                    bg={"hsla(0,0%,100%,.4)"}
                    bgImage={`url(https://www.jiomart.com/msassets/images/icons/orders.svg)`}
                    bgRepeat="no-repeat"
                    bgPos={"12px 12px"}
                    p="14px 12px 14px 48px"
                    align={"center"}
                    color={"white"}
                    h="48px"
                    borderRadius={"5px"}
                  >
                    Order History
                  </Flex>
                </HStack>
                <HStack>
                  <Flex
                    w="full"
                    bg={"hsla(0,0%,100%,.4)"}
                    bgImage={`url(https://www.jiomart.com/msassets/images/icons/location_white.svg)`}
                    bgRepeat="no-repeat"
                    bgPos={"12px 12px"}
                    p="14px 12px 14px 48px"
                    mt="10px"
                    align={"center"}
                    color={"white"}
                    h="48px"
                    borderRadius={"5px"}
                  >
                    Delivery Addresses
                  </Flex>
                </HStack>
              </Box>
            </VStack>
            <VStack w="full" align={"flex-start"}>
              <VStack bg={"white"} w="full" p="10px">
                <ListBox text="My List" />
                <Divider w="95%" mx="auto"></Divider>
                <ListBox text="WishList" />
                <Divider w="95%" mx="auto"></Divider>
                <ListBox text="PAN Card Information" />
                <Divider w="95%" mx="auto"></Divider>
                <ListBox text="Legal Information" />
                <Divider w="95%" mx="auto"></Divider>
                <ListBox text="Need Help" />
                <Divider w="95%" mx="auto"></Divider>
                <ListBox text="Contact us" />
                <Divider w="95%" mx="auto"></Divider>
                <ListBox text="Logout" />
                <Divider w="95%" mx="auto"></Divider>
              </VStack>
              <Flex
                fontSize={"12px"}
                align="flex-start"
                flexDir={"column"}
                px="5px"
              >
                <Text>For any queries,</Text>
                <Flex gap="2px">
                  WhatsApp us : <Text color={"blue"}>70003 70003</Text>
                </Flex>
              </Flex>
              <VStack fontSize={"12px"} align="flex-start" px="5px">
                <Text>
                  Due to current situation we are witnessing a huge surge in
                  calls/ e-mails. There may be a delay in response from our
                  side. Kindly bear with us.
                </Text>
              </VStack>
            </VStack>
          </VStack>
          <VStack
            w="60%"
            display={["none", "none", "flex", "flex", "flex", "flex"]}
          >
            <Box w="90%" minH="235px" p="24px" borderRadius={"8px"} bg="white">
              <Flex justify={"space-between"}>
                <Heading fontSize={"18px"} lineHeight="22px">
                  Account Information
                </Heading>
                <Text
                  fontSize={"15px"}
                  lineHeight="22px"
                  color="red"
                  cursor={"pointer"}
                  onClick={onOpen}
                >
                  EDIT
                </Text>
              </Flex>
              <Flex p="10px" h="full">
                <VStack align={"flex-start"} gap={"10px"} w="full">
                  <DetailBox text1={"Full Name"} text2={"Saroj Pahi"} />
                  <DetailBox text1={"Email Id"} text2={"sarojpahi@gamil.com"} />
                </VStack>
                <VStack w="full" align={"flex-start"} gap={"10px"}>
                  <DetailBox text1={"Mobile Number"} text2={"+91-8249816465"} />
                  <DetailBox
                    text1={"Default Address"}
                    text2={
                      "Jitendra Kumar Pahi,Sawmil,Railway Phatak,Sundergarh, Odisha - 770031"
                    }
                  />
                </VStack>
              </Flex>
            </Box>
          </VStack>
        </Flex>
      </Box>
      <ProfileEdit isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};
