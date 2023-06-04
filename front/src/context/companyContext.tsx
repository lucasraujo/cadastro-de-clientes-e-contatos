import { Dispatch, ReactNode, createContext, useState } from "react";
import { ICreateData } from "../components/formCreate/validator";
import { ILoguin } from "../components/formLogin/validators";
import "react-toastify/dist/ReactToastify.css";
import api from "../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { ICompany } from "../interfaces";

type ICompanyContextProvider = {
  children: ReactNode;
};

type ICompanyContextValues = {
  createCompany: (data: ICreateData) => void;
  login: (data: ILoguin) => void;
  getCompanyDataByToken:  (token:string) => void;
  company: ICompany 
  recharge: boolean  
  setRecharge : Dispatch<React.SetStateAction<boolean>>
};

const CompanyContext = createContext<ICompanyContextValues>(
  {} as ICompanyContextValues
);

const CompanyContextProvider = ({ children }: ICompanyContextProvider) => {
  const navigate = useNavigate();

  const [ company ,  setCompany ] = useState({} as ICompany)
  const [ recharge ,  setRecharge ] = useState(false as boolean)

  const createCompany = async (data: ICreateData) => {
    try {
      await api.post("company", data);
      toast.success("successfully registered company", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      navigate("/");
    } catch (error: any) {
      console.error(error);
      toast.error(error.response.data.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const login = async (data: ILoguin) => {

    try {
        const res = await api.post("login", data)
        toast.success("successful login", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });

          console.log(res)
        if(res.data.token){
            localStorage.setItem("CompanyToken:", res.data.token)
            navigate("/dashboard");
        }

    } catch (error: any) {
      console.error(error);
      toast.error(error.response.data.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const getCompanyDataByToken = async (token:string) =>{
    try {
      const res = await api.get("company", {
        headers: {
          Authorization: `Bearer ${token}`,
        }})
  
        setCompany(res.data)
      
    } catch (error) {
      console.error(error)
      navigate("/")
      
    }
  }

  return (
    <CompanyContext.Provider value={{ createCompany, login, getCompanyDataByToken, company,  recharge ,  setRecharge }}>
      {children}
    </CompanyContext.Provider>
  );
};

export { CompanyContextProvider, CompanyContext };
