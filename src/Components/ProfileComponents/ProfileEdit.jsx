import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { UpdateUserData } from "../../Contexts/crud";
import { AuthContext } from "../../Contexts/UserAuth";
export const ProfileEdit = ({ isOpen, onClose }) => {
  const { userDetails, setUserDetails, number } = useContext(AuthContext);
  const [userData, setUserData] = useState(userDetails);
  const handleChange = (e) => {
    const { value, name } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setUserDetails(userData);
      await UpdateUserData(userDetails, number);
    } catch (error) {
      console.log(error);
    }
    onClose();
  };
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent top="15%">
          <ModalHeader>
            <Text textAlign={"center"}>Edit Profile</Text>
            <ModalCloseButton />
          </ModalHeader>
          <ModalBody>
            <form id="new-form" onSubmit={handleSubmit}>
              <VStack>
                <FormControl>
                  <FormLabel>Full Name</FormLabel>
                  <Input
                    value={userData.fullname}
                    type="text"
                    name="fullname"
                    onChange={handleChange}
                  ></Input>
                </FormControl>
                <FormControl>
                  <FormLabel>Email Id</FormLabel>
                  <Input
                    value={userData.email}
                    type="email"
                    name="email"
                    onChange={handleChange}
                  ></Input>
                </FormControl>
                <FormControl>
                  <FormLabel>Mobile No.</FormLabel>
                  <Input
                    value={userData.mobile}
                    type="tel"
                    name="mobile"
                    onChange={handleChange}
                  ></Input>
                </FormControl>
                <FormControl>
                  <FormLabel>Address</FormLabel>
                  <Textarea
                    name="address"
                    value={userData.address}
                    placeholder="Enter Address"
                    onChange={handleChange}
                  />
                </FormControl>
              </VStack>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button
              p="5px 24px"
              color={"white"}
              _hover={{ bg: "#008edd" }}
              bg="#008ecc"
              type="submit"
              form="new-form"
            >
              Update
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
