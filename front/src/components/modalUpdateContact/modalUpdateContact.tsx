import { Button, FormControl, FormErrorMessage, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { IUpdateContact , updateContactShema } from "./validators";
import { ClientContext } from "../../context/clientContext";
import { IClient, IContact } from "../../interfaces";
import { ContactContext } from "../../context/contactContext";

const ModalUpdateContact = ({eleme, UpId}:{eleme :IContact, UpId:number}) => {

    const {id, fullName, email, phoneNumber } = eleme

    const test = useDisclosure();

  const {handleSubmit, register, formState:{ errors } }  = useForm <IUpdateContact> ({
    resolver: zodResolver(updateContactShema)
  })

  const { updateContact } = useContext(ContactContext)

  return (

    <>
        <Button m={"2"} colorScheme="yellow" onClick={test.onOpen}>update</Button>

      <Modal isOpen={test.isOpen} onClose={test.onClose}>
        <form onSubmit={handleSubmit(updateContact)}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Update contact</ModalHeader>
            <ModalCloseButton />

            <ModalBody pb={6}>


              <FormControl isInvalid={errors.fullName?true:false} display={"none"}>
                <FormLabel>id</FormLabel>
                <Input placeholder="UpId" {...register("UpId")} value={UpId}/>
              </FormControl>

              <FormControl isInvalid={errors.id?true:false} display={"none"}>
                <FormLabel>id</FormLabel>
                <Input placeholder="Full name" {...register("id")} value={id}/>
              </FormControl>

              <FormControl isInvalid={errors.fullName?true:false}>
                <FormLabel>Full name</FormLabel>
                <Input placeholder="Full name" {...register("fullName")} defaultValue={fullName}/>
                {errors.fullName && (<FormErrorMessage>{errors.fullName.message}</FormErrorMessage>)}
              </FormControl>

              <FormControl mt={4} isInvalid={errors.email?true:false}>
                <FormLabel>email</FormLabel>
                <Input placeholder="email" {...register("email")} defaultValue={email} />
                {errors.email && (<FormErrorMessage>{errors.email.message}</FormErrorMessage>)}
              </FormControl>

              <FormControl mt={4} isInvalid={errors.phoneNumber?true:false}>
                <FormLabel>phone number</FormLabel>
                <Input placeholder="phone number" {...register("phoneNumber")} defaultValue={phoneNumber} />
                {errors.phoneNumber&&(<FormErrorMessage>{errors.phoneNumber.message}</FormErrorMessage>)}
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" type="submit" mr={3} onClick={test.onClose} >
                Save
              </Button>
              <Button onClick={test.onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
    </>

  )
}


export default ModalUpdateContact