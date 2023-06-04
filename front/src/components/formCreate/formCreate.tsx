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
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import { ICreateData, companySchema } from "./validator";
import { useContext } from "react";
import { CompanyContext } from "../../context/companyContext";

const FormCreate = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICreateData>({
    resolver: zodResolver(companySchema),
  });

  const { createCompany } = useContext(CompanyContext);

  return (
    <Center
      flex={""}
      textAlign="center"
      fontSize="xl"
      height={"120vh"}
      backgroundColor={"blackAlpha.600"}
    >
      <Box
        p={"30px"}
        width={"50%"}
        textAlign={"center"}
        backgroundColor={"blue.200"}
        borderRadius={"2xl"}
      >
        <Text fontSize={"3xl"}>Register your company</Text>
        <form onSubmit={handleSubmit(createCompany)}>
          <FormControl isInvalid={errors.companyName ? true : false}>
            <FormLabel pt={"20px"}>Company name</FormLabel>
            <Input type="text" {...register("companyName")}></Input>
            <FormErrorMessage>{errors.companyName && (errors.companyName.message?.toString())}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.email ? true : false}>
            <FormLabel pt={"20px"}>Email</FormLabel>
            <Input type="text" {...register("email")}></Input>
            {errors.email && (
              <FormErrorMessage>{errors.email.message?.toString()}</FormErrorMessage>
            )}
          </FormControl>

          <FormControl isInvalid={errors.password ? true : false}>
            <FormLabel pt={"20px"}>Password</FormLabel>
            <Input type="password" {...register("password")}></Input>
            {errors.password && (
              <FormErrorMessage>{errors.password.message?.toString()}</FormErrorMessage>
            )}
          </FormControl>

          <FormControl
            pt={"20px"}
            isInvalid={errors.comfirmPassword ? true : false}
          >
            <FormLabel>comfirm password</FormLabel>
            <Input type="password" {...register("comfirmPassword")}></Input>
            {errors.comfirmPassword && (
              <FormErrorMessage>
                {errors.comfirmPassword.message?.toString()}
              </FormErrorMessage>
            )}
          </FormControl>

          <ButtonGroup width={"100%"} pt={"25px"}>
            <Button width={"100%"} type="submit">
              register
            </Button>
          </ButtonGroup>

          <Text pt={"20px"}>
            <Link to={"/"}>Or login if you already have an account</Link>
          </Text>
        </form>
      </Box>
    </Center>
  );
};

export default FormCreate;
