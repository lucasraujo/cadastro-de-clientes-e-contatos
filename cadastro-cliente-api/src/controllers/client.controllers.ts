import { Response, Request } from "express";
import createClientServices from "../services/clients/createClient.services";
import getClientServices from "../services/clients/getClient.services";
import updatedClientServices from "../services/clients/updateClient.services";
import deleteClientServices from "../services/clients/deleteClient.services";
import getAllClientServices from "../services/clients/getAllClient.services";

const createClientController = async ( request : Request, response : Response ) : Promise<Response> => {

    const res = await createClientServices(request)

    return response.status(201).json(res)
}
const getClientController = async ( request : Request, response : Response ) : Promise<Response> => {

    const res = await getClientServices(request)

    return response.status(200).json(res)
}
const getAllClientController = async ( request : Request, response : Response ) : Promise<Response> => {

    const res = await getAllClientServices(request)

    return response.status(200).json(res)
}
const updateClientController = async ( request : Request, response : Response ) : Promise<Response> => {

    const res = await updatedClientServices(request)

    return response.status(200).json(res)
}
const deleteClientController = async ( request : Request, response : Response ) : Promise<Response> => {

    await deleteClientServices(request)

    return response.status(204).json()
}

export {createClientController, getClientController, updateClientController, deleteClientController, getAllClientController}