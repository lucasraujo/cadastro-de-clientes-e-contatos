import { FindOneOptions, Repository } from "typeorm"
import Client from "../../entities/client.entities"
import { AppDataSource } from "../../data-source"
import { Request } from "express"
import Company from "../../entities/company.entities"
import { AppError } from "../../errors"


const getClientServices = async (request:Request) =>{
    const clientRepository : Repository<Client>  = AppDataSource.getRepository(Client)
    const companyRepository : Repository<Company>  = AppDataSource.getRepository(Company)
    const clientId = request.params.clientId
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
    .where("client.Id = :clientId",{clientId: clientId})
    .andWhere("company.Id = :companyId",{companyId: companyId})
    .getOne()

    if(!client){
        throw new AppError("client not found", 404)
    }


    //falta serializar
    return client

}

export default getClientServices