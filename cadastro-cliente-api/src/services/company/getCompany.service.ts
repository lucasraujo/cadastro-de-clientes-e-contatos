import { Request } from "express";
import { companyWithoutPasswordShcemaToGetRes, companyWithoutPasswordShema, updateCompanySchema } from "../../schemas/company.schema";
import { Repository } from "typeorm";
import Company from "../../entities/company.entities";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors";


const getCompanyService = async (request: Request) => {

    const companyRepository: Repository<Company> = AppDataSource.getRepository(Company)
    const companyId : number = request.company.id
    const companyInDataBase = await  companyRepository.findOne({
        where:{
            id: companyId
        }
    })

    if(!companyInDataBase){
        throw new AppError('user not exists', 404)
    }

    const res = await companyRepository.createQueryBuilder("company")
    .leftJoinAndSelect("company.clients","clients")
    .leftJoinAndSelect("clients.contacts","contacts")
    .where("company.id = :idCompany",{idCompany: companyId})
    .getOne()

    

    // return companyWithoutPasswordShcemaToGetRes.parse(res)
    return res

    //return companyWithoutPasswordShema.parse(companyInDataBase)

}

export{getCompanyService}