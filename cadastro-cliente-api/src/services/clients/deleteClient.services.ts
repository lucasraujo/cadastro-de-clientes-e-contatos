import { Repository } from "typeorm"
import Client from "../../entities/client.entities"
import { AppDataSource } from "../../data-source"
import { Request } from "express"
import Company from "../../entities/company.entities"
import { ICreateClient } from "../../interfaces/client.interface"
import { createClientSchema } from "../../schemas/client.schema"


const deleteClientServices = async (request:Request): Promise<void> =>{
    const clientRepository : Repository<Client>  = AppDataSource.getRepository(Client)
    const clientId = request.params.clientId 

    const client :any = await clientRepository.findOne({
        where:{
            id: clientId
        }
    })


    await clientRepository.delete(client)

    
}

export default deleteClientServices