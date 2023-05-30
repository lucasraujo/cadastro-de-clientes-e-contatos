import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Request } from "express"
import Contact from "../../entities/contacts.entities"
import { AppError } from "../../errors"


const deleteContactServices = async (request:Request): Promise<void> =>{
    const contactRepository : Repository<Contact>  = AppDataSource.getRepository(Contact)
    const clientId = request.params.clientId
    const contactId = request.params.contactId
    const companyId = request.company.id

    const client :any = await contactRepository
    .createQueryBuilder("contact")
    .innerJoinAndSelect("contact.client", "client")
    .innerJoinAndSelect("client.company", "company")
    .where("client.id = :clientId",{clientId: clientId})
    .andWhere("company.id = :companyId", {companyId: companyId})
    .andWhere("contact.id = :contactId",{contactId:contactId})
    .getOne()

    if(!client){
        throw new AppError("contact not found", 404)
    }

    await contactRepository.delete(client)

}

export default deleteContactServices