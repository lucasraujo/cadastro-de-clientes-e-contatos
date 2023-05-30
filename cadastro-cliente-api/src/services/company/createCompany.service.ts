import { Request } from "express";
import { Repository } from "typeorm";
import Company from "../../entities/company.entities";
import { AppDataSource } from "../../data-source";
import { companyWithoutPasswordShema, createCompanySchema } from "../../schemas/company.schema";
import { ICompanyResponse, ICreateCompany } from "../../interfaces/company.interface";
import { AppError } from "../../errors";
import { getRounds } from "bcrypt";

const createCompanyService = async (request: Request) => {
    const companyRepository: Repository<Company> = AppDataSource.getRepository(Company)
    const body:ICreateCompany = createCompanySchema.parse(request.body)
    
    const anotherCompanySameName = await companyRepository.findOne({
        where:{
            companyName: body.companyName
        }
    })
    
    if(anotherCompanySameName){
        throw new AppError("company already registered",404)
    }
    
    const newCompany = companyRepository.create(body)

    await companyRepository.save(newCompany)

    return companyWithoutPasswordShema.parse(newCompany)
    //return newCompany

}


export default createCompanyService