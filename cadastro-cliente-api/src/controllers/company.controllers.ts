import { Response, Request } from "express";
import createCompanyService from "../services/company/createCompany.service";
import { ICompanyResponse } from "../interfaces/company.interface";
import { updateCompanyService } from "../services/company/updateCompany.service";
import { getCompanyService } from "../services/company/getCompany.service";
import { deleteCompanyService } from "../services/company/deleteCompany.service";


const createCompanyController = async ( request : Request, response : Response ) : Promise<Response> => {

    const res:ICompanyResponse = await createCompanyService(request)

    return response.status(201).json(res)

}

const updateCompanyController = async ( request : Request, response : Response ) : Promise<Response> => {

    const res:ICompanyResponse = await updateCompanyService(request)

    return response.status(200).json(res)

}

const getCompanyController = async ( request : Request, response : Response ) : Promise<Response> => {

    const res = await getCompanyService(request)

    return response.status(200).json(res)

}

const deleteCompanyController = async ( request : Request, response : Response ) : Promise<Response> => {

    await deleteCompanyService(request)

    return response.status(200).json()

}



export {createCompanyController, updateCompanyController, getCompanyController, deleteCompanyController}