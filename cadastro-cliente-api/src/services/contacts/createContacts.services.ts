import { Request } from "express"
import Contact from "../../entities/contacts.entities"
import { QueryBuilder, Repository } from "typeorm"
import Client from "../../entities/client.entities"
import { AppDataSource } from "../../data-source"
import Company from "../../entities/company.entities"
import { AppError } from "../../errors"
import { createContactSchema } from "../../schemas/contact.schema"
import { ICreateContact } from "../../interfaces/contact.interface"


const createContactsServices = async (request:Request): Promise<Contact> =>{

    const clientId = request.params.clientId
    const companyId = request.company.id

    const body:ICreateContact = createContactSchema.parse(request.body)

    const clientRepository : Repository<Client>  = AppDataSource.getRepository(Client)
    const contactRepository : Repository<Contact>  = AppDataSource.getRepository(Contact)


    const clientInCompany2 = await clientRepository
    .createQueryBuilder("client")
    .innerJoinAndSelect("client.company", "company")
    .where("client.id = :clientId",{clientId:clientId})
    .andWhere("company.id = :companyId",{companyId:companyId})
    .getOne()


    if(!clientInCompany2){
        throw new AppError("client not found", 404)
    }

    const newContact = contactRepository.create({
        ...body,
        client: clientInCompany2
    })

    await contactRepository.save(newContact)

    return newContact
}

export default createContactsServices