import React, { useContext } from "react";                    
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { createClientSchema, ICreateClientForm  } from "./validators";
import { zodResolver } from "@hookform/resolvers/zod";
import { ClientContext } from "../../context/clientContext";

const ModalCreateUser = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {handleSubmit, register, formState:{ errors } }  = useForm <ICreateClientForm> ({
    resolver: zodResolver(createClientSchema)
  })

  const { createClient } = useContext(ClientContext)

  return (
    <>
      <Button onClick={onOpen}>REGISTER NEW CLIENT</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <form onSubmit={handleSubmit(createClient) }>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>register client</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl isInvalid={errors.fullName?true:false}>
                <FormLabel>Full name</FormLabel>
                <Input placeholder="Full name" {...register("fullName")}/>
                {errors.fullName && (<FormErrorMessage>{errors.fullName.message}</FormErrorMessage>)}
              </FormControl>

              <FormControl mt={4} isInvalid={errors.email?true:false}>
                <FormLabel>email</FormLabel>
                <Input placeholder="email" {...register("email")} />
                {errors.email && (<FormErrorMessage>{errors.email.message}</FormErrorMessage>)}
              </FormControl>

              <FormControl mt={4} isInvalid={errors.phoneNumber?true:false}>
                <FormLabel>phone number</FormLabel>
                <Input placeholder="phone number" {...register("phoneNumber")} />
                {errors.phoneNumber&&(<FormErrorMessage>{errors.phoneNumber.message}</FormErrorMessage>)}
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" type="submit" mr={3} >
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
    </>
  );
};

export default ModalCreateUser;
