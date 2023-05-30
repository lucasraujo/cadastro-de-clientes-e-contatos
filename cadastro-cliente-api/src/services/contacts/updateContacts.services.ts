import { Repository } from "typeorm"
import Client from "../../entities/client.entities"
import { AppDataSource } from "../../data-source"
import { Request } from "express"
import Company from "../../entities/company.entities"
import { ICreateClient } from "../../interfaces/client.interface"
import { createClientSchema } from "../../schemas/client.schema"
import clientRoutes from "../../routers/client.routes"
import Contact from "../../entities/contacts.entities"
import { IUpdateContact } from "../../interfaces/contact.interface"
import { updateContactSchema } from "../../schemas/contact.schema"
import { AppError } from "../../errors"


const updatedContactServices = async (request:Request) =>{

    const contactRepository : Repository<Contact>  = AppDataSource.getRepository(Contact)
    const clientId = request.params.clientId
    const contactId = request.params.contactId
    const companyId = request.company.id

    const body:IUpdateContact = updateContactSchema.parse(request.body)

    const contact :any = await contactRepository
    .createQueryBuilder("contact")
    .innerJoinAndSelect("contact.client", "client")
    .innerJoinAndSelect("client.company", "company")
    .where("client.id = :clientId",{clientId:clientId})
    .andWhere("company.id = :companyId", {companyId:companyId})
    .andWhere("contact.id = :contactId",{contactId:contactId})
    .getOne()

    if(!contact){
        throw new AppError("contact not found",404)
    }

    const updatedContactCreate = contactRepository.create({
        ...contact,
        ...body
    })

    await contactRepository.save(updatedContactCreate)

    return updatedContactCreate

}

export default updatedContactServices