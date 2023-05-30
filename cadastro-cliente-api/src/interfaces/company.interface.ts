import { z } from "zod"
import { createCompanySchema, companyWithoutPasswordShema, updateCompanySchema, companySchema } from "../schemas/company.schema"


type ICompany = z.infer<typeof companySchema>
type ICreateCompany = z.infer<typeof createCompanySchema >
type ICompanyResponse = z.infer<typeof companyWithoutPasswordShema > 
type IUpdateCompany = z.infer<typeof updateCompanySchema > 

export { ICreateCompany, ICompanyResponse, IUpdateCompany, ICompany }