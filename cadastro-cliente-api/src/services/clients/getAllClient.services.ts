import { Repository } from "typeorm"
import Client from "../../entities/client.entities"
import { AppDataSource } from "../../data-source"
import { Request } from "express"
import Company from "../../entities/company.entities"
import { AppError } from "../../errors"



const getAllClientServices = async (request:Request): Promise<Client[]> =>{
    const clientRepository : Repository<Client>  = AppDataSource.getRepository(Client)
    const companyRepository : Repository<Company>  = AppDataSource.getRepository(Company)
    
    const companyId = request.company.id

    const company= await companyRepository.findOne({
        where:{
            id: companyId
        }
    })

    if (!company){
        throw new AppError("teste", 404)
    }
      

    const client = await clientRepository
    .createQueryBuilder("client")
    .leftJoinAndSelect("client.company","company")
    .where("company.Id = :companyId",{companyId: companyId})
    .getMany()

    if(!client){
        throw new AppError("client not found", 404)
    }


    //falta serializar
    return client
}

export default getAllClientServices 