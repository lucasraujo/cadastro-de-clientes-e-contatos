import { createContext } from "react";
import { ICreateData } from "../components/formCreate/validator";
import { ILoguin } from "../components/formLogin/validators";
import "react-toastify/dist/ReactToastify.css";
import api from "../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

type ICompanyContextProvider = {
  children: React.ReactNode;
};

type ICompanyContextValues = {
  createCompany: (data: ICreateData) => void;
  login: (data: ILoguin) => void;
};

const CompanyContext = createContext<ICompanyContextValues>(
  {} as ICompanyContextValues
);

const CompanyContextProvider = ({ children }: ICompanyContextProvider) => {
  const navigate = useNavigate();
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

  const getCompanyDataByToken 



  return (
    <CompanyContext.Provider value={{ createCompany, login }}>
      {children}
    </CompanyContext.Provider>
  );
};

export { CompanyContextProvider, CompanyContext };
