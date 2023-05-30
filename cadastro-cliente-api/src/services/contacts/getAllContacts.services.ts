import { Repository } from "typeorm"
import Client from "../../entities/client.entities"
import { AppDataSource } from "../../data-source"
import { Request } from "express"
import Contact from "../../entities/contacts.entities"
import { AppError } from "../../errors"


const getAllContactServices = async (request:Request): Promise<Client> =>{

    const contactRepository : Repository<Contact>  = AppDataSource.getRepository(Contact)
    const clientId = request.params.clientId
    const contactId = request.params.contactId
    const companyId = request.company.id

    const contact : any = await contactRepository
    .createQueryBuilder("contact")
    .innerJoinAndSelect("contact.client", "client")
    .innerJoinAndSelect("client.company", "company")
    .where("client.id = :clientId",{clientId: clientId})
    .andWhere("company.id = :companyId", {companyId: companyId})
    .getMany()

    if(!contact){
        throw new AppError("contacts not found",404)
    }

    return contact
}

export default getAllContactServices 