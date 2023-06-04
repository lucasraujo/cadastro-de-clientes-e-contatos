import { Box, Button,  Center, Flex, Heading } from "@chakra-ui/react"
import React, { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { CompanyContext } from "../../context/companyContext";
import ClientCard from "../clientCard/clientCard";
import ModalCreateUser from "../modalCreateClient/modalCreateClient";


const DashBoard = ()=>{
    const navigate = useNavigate();

    const {company, getCompanyDataByToken , recharge} = useContext(CompanyContext)

    useEffect(() => {
      const token: string | null = localStorage.getItem("CompanyToken:")
      if(!token){
        navigate("/")
      }
      getCompanyDataByToken(token!)
    }, [recharge])

    
    return( 

        <Center flex={""} textAlign="center" fontSize="xl" minH={"100vh"} height={"full"} backgroundColor={"blackAlpha.600"} pt={"10"} pb={"10"}>
            <Box  p={"30px"} minH={"90%"} width={"95%"} textAlign={"center"} backgroundColor={"blue.200"} borderRadius={"2xl"}>

              <Flex justify={"space-between"} mb={"4"}>
               <Heading size='md'>{company.companyName}</Heading>
                
               <Heading size='md'>{company.email}</Heading>

               <ModalCreateUser/>

              </Flex>

              <ClientCard/>
                
            </Box>






      {/* <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>

          <form >
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>

              <FormControl>
                <FormLabel>full name</FormLabel>
                <Input ref={initialRef} placeholder='First name' />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>email</FormLabel>
                <Input placeholder='Last name' />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>phone number</FormLabel>
                <Input placeholder='phone number' />
              </FormControl>

            </ModalBody>

            <ModalFooter>
              <Button colorScheme='blue' mr={3}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>

          </form>
        </ModalContent>
      </Modal> */}

        </Center>
        
    )
    
  }
  
export default DashBoard