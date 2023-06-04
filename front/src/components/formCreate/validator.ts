
import { ZodSchema, z } from "zod"

const companySchema: ZodSchema = z.object({
    
    //@Column({unique: true, length: 120})
    companyName:z.string().max(120).nonempty("this field cannot be empty"),

    //@Column({length: 120})
    email: z.string().max(120).email("Enter a valid email address").nonempty("this field cannot be empty"),

    //@Column({length:120})
    password:z.string().max(35).nonempty("this field cannot be empty"),

    comfirmPassword: z.string().max(35).nonempty("this field cannot be empty")
    
    
}).refine((data)=> data.password === data.comfirmPassword, {message:"the passwords are not the same", path:["comfirmPassword"]})

export type ICreateData = z.infer<typeof companySchema>

export { companySchema }