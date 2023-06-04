import { createContext, useContext} from "react";
import api from "../services/api";
import { toast } from "react-toastify";
import { CompanyContext } from "./companyContext";
import { IAddContact } from "../components/addContact/validator";
import { IUpdateContact } from "../components/modalUpdateContact/validators";

type IContactContextProvider = {
    children: React.ReactNode;
  };

  type IContactContextValues = {

    createContact: (data:IAddContact) => void
    deleteContact: (UpId:number, id: number) => void
    updateContact: (data:  IUpdateContact) => void

  }


const ContactContext = createContext({} as IContactContextValues) 

const ContactContextProvider = ({ children }:IContactContextProvider) =>{

    const { setRecharge, recharge } = useContext(CompanyContext)
     

    const createContact = async (data:IAddContact) =>{

        
        const token = localStorage.getItem("CompanyToken:")

        try {
            await api.post( `contact/${data.UpId}`, data,{headers:{Authorization: `Bearer ${token}`,}})
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

    const updateContact = async (data:  IUpdateContact ) =>{

        const token = localStorage.getItem("CompanyToken:")

        try {
            await api.patch(`contact/${data.UpId}/${data.id}`, data, {headers:{Authorization: `Bearer ${token}`,}} )
            setRecharge(!recharge)
                toast.success("successfully UPDATE contact", {
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

    const deleteContact = async (UpId:number, id: number  ) =>{ 

        const token = localStorage.getItem("CompanyToken:")

        try {

            await api.delete(`contact/${UpId}/${id}`, {headers:{Authorization: `Bearer ${token}`,}})
            setRecharge(!recharge)
            toast.success("successfully delete contact", {
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
        <ContactContext.Provider value={{createContact, deleteContact, updateContact}} >
            { children }
        </ContactContext.Provider>
    )
}


export { ContactContext, ContactContextProvider }