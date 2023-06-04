import { Box, Button, Flex, Grid, Text } from "@chakra-ui/react";
import { IContact } from "../../interfaces";
import { number } from "yup";
import { useContext } from "react";
import { ContactContext } from "../../context/contactContext";
import ModalUpdateContact from "../modalUpdateContact/modalUpdateContact";

const ContactCard = ({eleme, UpId}:{eleme :IContact, UpId:number}) => {

    const { id, email, fullName, phoneNumber  } = eleme

    const { deleteContact } = useContext(ContactContext)


    
    


  return (
    // <Grid templateColumns="repeat(1,1fr)" margin={"4"} h={"15%"}>
      <Flex
        align={"center"}
        justify={"space-between"}
        bgColor={"white"}
        borderRadius={"2xl"}
        padding={"1"}
        margin={"1"}
        maxH={"40"}
      >
        <Text> {fullName} </Text>
        <Text> {email}</Text>
        <Text>{phoneNumber}</Text>

        <Box>
        <ModalUpdateContact  UpId={UpId} eleme={eleme}  />
          <Button m={"2"} colorScheme="red"  onClick={()=> deleteContact(UpId, id)}>
            delete
          </Button>
        </Box>
      </Flex>
  );
};


export default ContactCard