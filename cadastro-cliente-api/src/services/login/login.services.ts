import { compare } from "bcrypt"
import jwt from "jsonwebtoken"

import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import  Company  from "../../entities/company.entities"
import { AppError } from "../../errors"
import { Request } from "express"
import { ILoginData } from "../../interfaces/login.interface"
import { loginSchema } from "../../schemas/login.schema"

const loginServices = async (request:Request):Promise<string> =>{

    const companyRepository: Repository<Company> = AppDataSource.getRepository(Company)

    const bodyLogin: ILoginData = loginSchema.parse(request.body)

    const findUser  =  await companyRepository.findOne({
        where:{
            companyName: bodyLogin.companyName
        }
    })

    if(!findUser){
        throw new AppError("Invalid credentials",401 )
    }

   const matchPassword : boolean = await compare(bodyLogin.password, findUser.password)

   if(!matchPassword){
    throw new AppError("Invalid credentials",401 )
   }

    const token : string = jwt.sign(
    {
    },
    process.env.SECRET_KEY!
    ,{
        expiresIn : process.env.EXPIRES_IN,
        subject: findUser.id.toString()
    }
    )

    return token

}

export {
    loginServices
}