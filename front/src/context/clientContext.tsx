import { createContext, useContext,} from "react";
import { ICreateClientForm } from "../components/modalCreateClient/validators";
import api from "../services/api";
import { toast } from "react-toastify";
import { CompanyContext } from "./companyContext";
import { IUpdateClient } from "../components/modalUpdateClient/validators";

type IClientContextProvider = {
    children: React.ReactNode;
  };

  type IClientContextValues = {

    createClient: (data:ICreateClientForm) => void
    deleteClient: (id:number) => void
    updateClient: (data: IUpdateClient) => void

  }


const ClientContext = createContext({} as IClientContextValues) 

const ClientContextProvider = ({ children }:IClientContextProvider) =>{

    const { setRecharge, recharge } = useContext(CompanyContext)
     

    const createClient = async (data:ICreateClientForm) =>{


        const token = localStorage.getItem("CompanyToken:")

        try {
            await api.post( "client", data,{headers:{Authorization: `Bearer ${token}`,}})
            setRecharge(!recharge)
            toast.success("successfully registered client", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });

        } catch (error) {
            console.error(error)
            toast.error("the creation did not work try again", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              })
        }

    }

    const updateClient = async (data: IUpdateClient) =>{

        const token = localStorage.getItem("CompanyToken:")

        try {
            await api.patch(`client/${data.id}`, data, {headers:{Authorization: `Bearer ${token}`,}} )
            setRecharge(!recharge)
                toast.success("successfully UPDATE client", {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                  });
            
        } catch (error) {
            console.error(error)
            toast.error("the UPDATE did not work try again", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              })
        }


    }

    const deleteClient = async (id: number ) =>{ 

        const token = localStorage.getItem("CompanyToken:")

        try {

            await api.delete(`client/${id}`, {headers:{Authorization: `Bearer ${token}`,}})
            setRecharge(!recharge)
            toast.success("successfully delete client", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });

            
        } catch (error) {
            console.error(error)
            toast.error("error deleting try again", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              })
        }

    }

    return(
        <ClientContext.Provider value={{createClient, deleteClient, updateClient}} >
            { children }
        </ClientContext.Provider>
    )
}


export { ClientContext, ClientContextProvider }