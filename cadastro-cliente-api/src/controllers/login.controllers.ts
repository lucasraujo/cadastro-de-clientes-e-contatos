import { Request, Response } from "express";
// import { iLoginRequestData } from "../interfaces/login.interfaces";
// import { loginSchema } from "../schemas/login.schema";
import { loginServices } from "../services/login/login.services";


const loginController = async (request : Request, response : Response) : Promise<Response> => { 
 

    const token = await loginServices(request)

    return response.status(200).json({"token":token})

}

export{
    loginController
}