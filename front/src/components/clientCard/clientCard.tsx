import { Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { CompanyContext } from "../../context/companyContext";
import ContactCard from "../contactCard/contactCard";
import { ClientContext } from "../../context/clientContext";
import ModalUpdateClient from "../modalUpdateClient/modalUpdateClient";
import AddContactModal from "../addContact/addContact";


const ClientCard = () => {

  const { company } = useContext(CompanyContext)
  const { deleteClient } = useContext(ClientContext)
  let UpId: number 

  return (

    <Grid  minH={"70vh"} backgroundColor={"blue.300"} borderRadius={"2xl"} p={"4"}  templateColumns="repeat(1,1fr)">

    {company.clients?.map((ele) => <Card mt={"4"} minH={"400"} key={ele.id} >
                  <CardHeader>
                    <Heading size="md">{ele.fullName}</Heading>
                  </CardHeader>
                  <CardBody  >
                    <Flex  h={"100%"}>
                      <Box minW={"20%"}>
                        <Text>{ele.email}</Text>
                        <Text>{ele.phoneNumber}</Text>
                      </Box>
                      <Box bgColor={"blue.200"} width={"100%"} borderRadius={"2xl"}>
                        <Heading size={"md"}>contacts</Heading>
                        <Grid templateColumns="repeat(1,1fr)" margin={"4"} h={"15%"}>

                          {UpId = ele.id }

                          {ele.contacts?.map((eleme)=> <ContactCard UpId={UpId} eleme={eleme} key={eleme.id}/>)}


                        </Grid>

                        {/*  ^  <Grid templateColumns="repeat(1,1fr)" margin={"4"} h={"15%"}  > */}

                      </Box>
                    </Flex>
                  </CardBody>
                  <CardFooter>

                    < AddContactModal ele={ele}/>

                    <ModalUpdateClient  ele={ele}/>
                    <Button m={"2"} colorScheme="red" onClick={()=>deleteClient(ele.id)}>
                      delete
                    </Button>
                  </CardFooter>
                </Card>)}
               </Grid> 
  );
};


export default ClientCard