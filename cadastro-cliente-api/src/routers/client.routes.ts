import { Router } from "express";
import { createClientController, deleteClientController, getAllClientController, getClientController, updateClientController } from "../controllers/client.controllers";
import { validateToken } from "../middlewares/validadetoken";
const clientRoutes: Router = Router();


clientRoutes.post("", validateToken, createClientController );
clientRoutes.get("", validateToken, getAllClientController );
clientRoutes.get("/:clientId", validateToken, getClientController );
clientRoutes.patch("/:clientId", validateToken, updateClientController);
clientRoutes.delete("/:clientId", validateToken, deleteClientController);


export default clientRoutes;
