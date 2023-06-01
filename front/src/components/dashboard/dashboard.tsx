import { Box, Center, Text } from "@chakra-ui/react"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const DashBoard = ()=>{
    const navigate = useNavigate();

    useEffect(() => {
      const token = localStorage.getItem("CompanyToken:")
      if(!token){
        navigate("/")
      }
    }, [])

    
    return( 
        <Center flex={""} textAlign="center" fontSize="xl" height={"100vh"} backgroundColor={"blackAlpha.600"} >
            <Box p={"30px"} minH={"90%"} width={"95%"} textAlign={"center"} backgroundColor={"blue.200"} borderRadius={"2xl"}>
               <Text>{}</Text>         
                    
            </Box>
        </Center>
    )
  
}

export default DashBoard