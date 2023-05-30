import { Repository } from "typeorm"
import Client from "../../entities/client.entities"
import { AppDataSource } from "../../data-source"
import { Request } from "express"
import Company from "../../entities/company.entities"
import { ICreateClient, ICreateClientResponse } from "../../interfaces/client.interface"
import { createClientResponseSchema, createClientSchema } from "../../schemas/client.schema"
import { AppError } from "../../errors"


const createClientServices = async (request:Request): Promise<ICreateClientResponse> =>{
    const clientRepository : Repository<Client>  = AppDataSource.getRepository(Client)
    const companyRepository: Repository<Company> = AppDataSource.getRepository(Company)
    const companyId:number = request.company.id

    const body: ICreateClient = createClientSchema.parse(request.body)

    const company:any= await companyRepository.findOne({
        where:{
            id: companyId
        }
    })

    const newClient = clientRepository.create({
        ...body,
        company: company

    })

    await clientRepository.save(newClient)

    
    return createClientResponseSchema.parse(newClient) 

}

export default createClientServices