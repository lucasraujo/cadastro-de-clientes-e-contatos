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
import { addContactSchema, IAddContact } from "./validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactContext } from "../../context/contactContext";
import { IClient } from "../../interfaces";



const AddContactModal = ({ele}:{ele:IClient}) => {

  const { isOpen, onOpen, onClose } = useDisclosure();

  const {handleSubmit, register, formState:{ errors } }  = useForm <IAddContact> ({
    resolver: zodResolver( addContactSchema)
  })

  const { createContact } = useContext(ContactContext)


  return (
    <>
    <Button m={"2"} colorScheme="blue" onClick={onOpen}> add contact </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <form onSubmit={handleSubmit(createContact) }>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>register client</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>


                
              <FormControl isInvalid={errors.UpId?true:false} display={"none"}>
                <FormLabel>id</FormLabel>
                <Input placeholder="id" {...register("UpId")} value={ele.id}/>
                {errors.UpId && (<FormErrorMessage>{errors.UpId.message}</FormErrorMessage>)}
              </FormControl>


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
              <Button colorScheme="blue" type="submit" mr={3} onClick={onClose}>
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

export default  AddContactModal ;