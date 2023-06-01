import * as React from "react"
import { ToastContainer } from "react-toastify";
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"

import {Route, Routes} from "react-router-dom"
import FormCreate from "./components/formCreate/formCreate"
import FormLogin from "./components/formLogin/formLogin"
import DashBoard from "./components/dashboard/dashboard";

export const App = () => (
  <ChakraProvider theme={theme} >

    <Routes>
        <Route path="/register" element={<FormCreate />}/>
        <Route path="/" element={<FormLogin/>}/>
        <Route path="/dashboard" element={<DashBoard/>}/> 
    </Routes>


    <ToastContainer/>
  </ChakraProvider>
)
