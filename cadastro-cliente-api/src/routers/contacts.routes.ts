import { Router } from "express";
import { UpdateContactsController, createContactsController, deleteContactsController, getAllContactsController, getContactsController } from "../controllers/contacts.controllers";
import { validateToken } from "../middlewares/validadetoken";
const contactsRoutes: Router = Router();

contactsRoutes.post("/:clientId", validateToken, createContactsController);
contactsRoutes.get("/:clientId", validateToken, getAllContactsController);
contactsRoutes.get("/:clientId/:contactId", validateToken, getContactsController );
contactsRoutes.patch("/:clientId/:contactId", validateToken, UpdateContactsController );
contactsRoutes.delete("/:clientId/:contactId", validateToken,  deleteContactsController );

export default contactsRoutes;
