import {z} from "zod"
import { companyWithoutPasswordShcemaToGetRes } from "./company.schema"

const clientSchema = z.object({

    // @PrimaryGeneratedColumn()
      id:z.number(),

    // @Column({unique: true, length: 120})
      fullName: z.string().max(120),

    // @Column({length: 120})
      email: z.string().max(120).email(),

    // @Column({length: 15})
      phoneNumber: z.string().max(16).regex(new RegExp(/^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/), "provide in this format (xx) xxxxx-xxxx"),

    // @Column({type: "date"})
      RegistrationDate: z.string(),

    // @ManyToOne(() => Company, (company)=> company.clients)
      company: z.number(),

})

const createClientSchema = clientSchema.omit({
    RegistrationDate: true,
    company: true,
    id:true
})

const createClientResponseSchema = clientSchema.omit({
  company: true, RegistrationDate:true
})

const updatedClientSchema = createClientSchema.partial()

export {createClientSchema, clientSchema, updatedClientSchema, createClientResponseSchema }