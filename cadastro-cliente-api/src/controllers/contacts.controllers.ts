import { Response, Request } from "express";
import createContactsServices from "../services/contacts/createContacts.services";
import updatedContactServices from "../services/contacts/updateContacts.services";
import getContactServices from "../services/contacts/getContacts.services";
import deleteContactServices from "../services/contacts/deleteContacts.services";
import getAllContactServices from "../services/contacts/getAllContacts.services";

const createContactsController = async ( request : Request, response : Response ) : Promise<Response> => {

    const res = await createContactsServices(request)

    return response.status(201).json(res)
}
const UpdateContactsController = async ( request : Request, response : Response ) : Promise<Response> => {

    const res = await updatedContactServices(request)

    return response.status(200).json(res)
}
const getContactsController = async ( request : Request, response : Response ) : Promise<Response> => {

    const res = await getContactServices(request)

    return response.status(200).json(res)
}
const getAllContactsController = async ( request : Request, response : Response ) : Promise<Response> => {

    const res = await getAllContactServices(request)

    return response.status(200).json(res)
}
const deleteContactsController = async ( request : Request, response : Response ) : Promise<Response> => {

    const res = await deleteContactServices(request)

    return response.status(204).json(res)
}


export {createContactsController, UpdateContactsController, getContactsController, deleteContactsController, getAllContactsController}