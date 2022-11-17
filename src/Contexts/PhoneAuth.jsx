import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  Input,
  InputGroup,
  InputLeftAddon,
  Text,
  VStack,
} from "@chakra-ui/react";
import { VscChevronRight } from "react-icons/vsc";
import { useContext, useState } from "react";
import { AuthContext } from "./UserAuth";
import { useNavigate } from "react-router-dom";
import { addUser, getUser } from "./crud";

function validateNumber(value) {
  if (value === "") return false;
  if (value.length !== 10) {
    return true;
  }
  if (value === 0) return true;
}
export const PhoneAuth = () => {
  const [otp, setOtp] = useState("");
  const [show, setShow] = useState(true);
  const {
    setUpRecapta,
    user,
    setUser,
    number,
    setNumber,
    userDetails,
    setUserDetails,
  } = useContext(AuthContext);
  const [confirmObj, setConfrimObj] = useState();
  const navigate = useNavigate();
  const [takeName, setTakeName] = useState(false);
  const [name, setName] = useState("");
  const submitNumber = async () => {
    const phone = `+91${number}`;
    setNumber(number);
    try {
      const user = (await getUser(number)).data();
      if (user?.name) {
        setName(user.name);
        setUserDetails(user);
      }
      const res = await setUpRecapta(phone);
      setConfrimObj(res);
      setShow(res ? false : true);
    } catch (error) {
      console.log(error);
    }
  };
  const isError = validateNumber(number);
  const verifyOtp = async () => {
    try {
      await confirmObj.confirm(otp);
      name ? navigate("/") : setTakeName(true);
    } catch (error) {
      console.log(error);
    }
  };
  const handleUserData = async () => {
    setUserDetails({ ...userDetails, name: name, mobile: number });
    await addUser(userDetails, number);
    setUser({ ...user, name: name });
    navigate("/");
  };
  return (
    <>
      <VStack
        align={"center"}
        w="360px"
        gap={[0, 0, 0, 2, 2, 2]}
        display={takeName ? "none" : "flex"}
        px={2}
      >
        <FormControl isInvalid={isError}>
          <InputGroup>
            <InputLeftAddon children="+91" />
            <Input
              type="tel"
              value={number}
              placeholder="Enter your mobile number"
              onChange={(e) => setNumber(e.target.value)}
            />
          </InputGroup>
          {!isError ? (
            ""
          ) : (
            <FormErrorMessage>
              <Text color={"red"}>Please enter valid Mobile Number!</Text>
            </FormErrorMessage>
          )}
        </FormControl>
        <Box id="recaptcha-container" />
        <Box h="80px" display={show ? "flex" : "none"}>
          <Button
            onClick={submitNumber}
            borderRadius="100%"
            w="60px"
            h="60px"
            bg={"#008ecc"}
            color="white"
            fontWeight={"bold"}
            fontSize="40px"
            _hover={{ bg: "#008ecc" }}
          >
            <VscChevronRight />
          </Button>
        </Box>
        <VStack w="full" display={show ? "none" : "block"} gap={3}>
          <FormControl>
            <InputGroup>
              <Input
                type="tel"
                value={otp}
                placeholder="Enter your OTP"
                onChange={(e) => setOtp(e.target.value)}
              />
            </InputGroup>
          </FormControl>
          <Box h="60px">
            <Button
              w="full"
              onClick={verifyOtp}
              bg={"#008ecc"}
              color="white"
              fontWeight={"bold"}
              _hover={{ bg: "#008ecc" }}
            >
              Verify
            </Button>
          </Box>
        </VStack>
      </VStack>
      <VStack w="360px" display={takeName ? "flex" : "none"} gap={3}>
        <Input
          type={"text"}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Name"
        />
        <Box h="60px">
          <Button
            onClick={handleUserData}
            bg={"#008ecc"}
            color="white"
            fontWeight={"bold"}
            _hover={{ bg: "#008ecc" }}
          >
            Confirm
          </Button>
        </Box>
      </VStack>
    </>
  );
};
