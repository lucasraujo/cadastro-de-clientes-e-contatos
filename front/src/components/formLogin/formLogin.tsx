import {
  Box,
  FormControl,
  FormLabel,
  Input,
  ButtonGroup,
  Button,
  Text,
  Center,
  FormErrorMessage,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ILoguin, loginSchema } from "./validators";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { CompanyContext } from "../../context/companyContext";

const FormLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoguin>({
    resolver: zodResolver(loginSchema),
  });

  const { login } = useContext(CompanyContext);

  return (
    <Center
      flex={""}
      textAlign="center"
      fontSize="xl"
      height={"100vh"}
      backgroundColor={"blackAlpha.600"}
    >
      <Box
        p={"30px"}
        width={"50%"}
        textAlign={"center"}
        backgroundColor={"blue.200"}
        borderRadius={"2xl"}
      >
        <Text fontSize={"3xl"}>login</Text>
        <form onSubmit={handleSubmit(login)}>
          <FormControl isInvalid={errors.companyName ? true : false}>
            <FormLabel pt={"20px"}>Company name</FormLabel>
            <Input type="text" {...register("companyName")}></Input>
            {errors.companyName && (
              <FormErrorMessage>{errors.companyName.message}</FormErrorMessage>
            )}
          </FormControl>

          <FormControl isInvalid={errors.password ? true : false}>
            <FormLabel pt={"20px"}>Password</FormLabel>
            <Input type="password" {...register("password")}></Input>
            {errors.password && (
              <FormErrorMessage>{errors.password.message}</FormErrorMessage>
            )}
          </FormControl>

          <ButtonGroup width={"100%"} pt={"25px"}>
            <Button width={"100%"} type="submit">
              login
            </Button>
          </ButtonGroup>
          <Text pt={"20px"}>
            <Link to={"/register"}>
              or register if you don't have an account
            </Link>
          </Text>
        </form>
      </Box>
    </Center>
  );
};

export default FormLogin;
