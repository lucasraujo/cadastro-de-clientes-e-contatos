import { Router } from "express";
import { createCompanyController, deleteCompanyController, getCompanyController, updateCompanyController } from "../controllers/company.controllers";
import { validateToken } from "../middlewares/validadetoken";

const companyRoutes: Router = Router();
companyRoutes.post("", createCompanyController);
companyRoutes.get("",validateToken, getCompanyController);
companyRoutes.patch("", validateToken, updateCompanyController );
companyRoutes.delete("", validateToken, deleteCompanyController );

export default companyRoutes;
