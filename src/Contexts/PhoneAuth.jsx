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
function validateNumber(value) {
  if (value === "") return false;
  if (value.length !== 10) {
    console.log(value);
    return true;
  }
  if (value === 0) return true;
}
export const PhoneAuth = () => {
  const [number, setNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [show, setShow] = useState(true);
  const { setUpRecapta, user, setUser } = useContext(AuthContext);
  const [confirmObj, setConfrimObj] = useState();
  const navigate = useNavigate();
  const [takeName, setTakeName] = useState(false);
  const [name, setName] = useState("");
  const submitNumber = async () => {
    const phone = `+91${number}`;
    try {
      const res = await setUpRecapta(phone);
      setConfrimObj(res);
      setShow(res ? false : true);
    } catch (error) {
      console.log(error);
    }
    console.log("Number :", phone);
  };
  const isError = validateNumber(number);
  const verifyOtp = async () => {
    console.log(confirmObj);
    console.log(otp);
    try {
      await confirmObj.confirm(otp);
      confirmObj.name ? navigate("/") : setTakeName(true);
      console.log(confirmObj);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <VStack
        align={"center"}
        w="360px"
        gap={2}
        display={takeName ? "none" : "flex"}
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
          display={show ? "flex" : "none"}
        >
          <VscChevronRight />
        </Button>
        <VStack w="full" display={show ? "none" : "block"}>
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
        </VStack>
      </VStack>
      <VStack w="360px" display={takeName ? "flex" : "none"}>
        <Input
          type={"text"}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Name"
        />
        <Button
          onClick={() => {
            setUser({ ...user, name: name });
            navigate("/");
          }}
          bg={"#008ecc"}
          color="white"
          fontWeight={"bold"}
          _hover={{ bg: "#008ecc" }}
        >
          Confirm
        </Button>
      </VStack>
    </>
  );
};
