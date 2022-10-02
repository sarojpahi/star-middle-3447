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
} from "@chakra-ui/react";

export const ProfileEdit = ({ isOpen, onClose }) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} position>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <ModalCloseButton />
          </ModalHeader>
          <ModalBody>
            <form
              id="new-form"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Updated");
              }}
            >
              <FormControl>
                <FormLabel>Edit Profile</FormLabel>
                <Input type="text" name="fullname"></Input>
                <Input type="email" name="email"></Input>
              </FormControl>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button type="submit" form="new-form">
              Update
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
