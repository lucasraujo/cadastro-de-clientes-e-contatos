import { Request } from "express";
import { companyWithoutPasswordShema,} from "../../schemas/company.schema";
import { Repository } from "typeorm";
import Company from "../../entities/company.entities";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors";


const deleteCompanyService = async (request: Request) => {
    const companyRepository: Repository<Company> = AppDataSource.getRepository(Company)
    const companyId : number = request.company.id
    const companyInDataBase = await companyRepository.findOne({
        where:{
            id: companyId
        }
    })

    if(!companyInDataBase){
        throw new AppError('company not exists', 404)
    }

    await companyRepository.remove(companyInDataBase)

}

export{deleteCompanyService}