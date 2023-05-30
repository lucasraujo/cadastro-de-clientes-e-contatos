import { z } from "zod"
import { clientSchema } from "./client.schema"

const companySchema = z.object({
    id: z.number(),
    
    //@Column({unique: true, length: 120})
    companyName:z.string().max(120),

    //@Column({length: 120})
    email: z.string().max(120).email(),

    //@Column({length:120})
    password:z.string().max(120),

    //@OneToMany(() => Client, (client) => client.company)
    clients: z.array(clientSchema.optional())
})

const createCompanySchema = companySchema.omit({
    id:true, clients:true
})

const companyWithoutPasswordShema = companySchema.omit({
    password:true, clients:true
})

const companyWithoutPasswordShcemaToGetRes = companySchema.omit({
    password:true,
    
})

const updateCompanySchema = createCompanySchema.partial()

export { companySchema, createCompanySchema, companyWithoutPasswordShema, updateCompanySchema, companyWithoutPasswordShcemaToGetRes }