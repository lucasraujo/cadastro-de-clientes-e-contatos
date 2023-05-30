import { Repository } from "typeorm"
import Client from "../../entities/client.entities"
import { AppDataSource } from "../../data-source"
import { Request } from "express"
import { IUpdatedClient } from "../../interfaces/client.interface"
import { updatedClientSchema } from "../../schemas/client.schema"



const updatedClientServices = async (request:Request) =>{
    const clientRepository : Repository<Client>  = AppDataSource.getRepository(Client)

    const clientId = request.params.clientId 
    const body: IUpdatedClient = updatedClientSchema.parse(request.body)
    const client :any = await clientRepository.findOne({
        where:{
            id: clientId
        }
    })

    const updatedClient = clientRepository.create({
        ...client,
        ...body
    })

    await clientRepository.save(updatedClient)

    return updatedClient
}

export default updatedClientServices