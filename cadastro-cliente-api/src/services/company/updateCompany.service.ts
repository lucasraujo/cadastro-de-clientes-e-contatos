import { Request } from "express";
import { companyWithoutPasswordShema, updateCompanySchema } from "../../schemas/company.schema";
import { Repository } from "typeorm";
import Company from "../../entities/company.entities";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors";
import { IUpdateCompany } from "../../interfaces/company.interface";

const updateCompanyService = async (request: Request) => {
    const companyRepository: Repository<Company> = AppDataSource.getRepository(Company)

    const bodyUpdate : IUpdateCompany| any = updateCompanySchema.parse(request.body)
    const companyId : number = request.company.id


    const companyInDataBase = await  companyRepository.findOne({
        where:{
            id: companyId
        }
    })

    if(!companyInDataBase){
        throw new AppError('company not exists', 404)
    }

    if(bodyUpdate.companyName){
        const anotherCompanySameName = await companyRepository.findOne({
            where:{
                companyName: bodyUpdate.companyName
            }
        })

        if(anotherCompanySameName){
            throw new AppError("company name already registered",404)
        }
    }

    const updateCompanyCreated = companyRepository.create({
        ...companyInDataBase,
        ...bodyUpdate
    })

    await companyRepository.save(updateCompanyCreated)

    return companyWithoutPasswordShema.parse(updateCompanyCreated)

}

export{updateCompanyService}