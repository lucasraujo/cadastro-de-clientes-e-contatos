import {z} from "zod"
import { clientSchema } from "./client.schema"

const contactSchema = z.object({

    // @PrimaryGeneratedColumn()
      id:z.number(),

    // @Column({unique: true, length: 120})
      fullName: z.string().max(120),

    // @Column({length: 120})
      email: z.string().max(120).email(),

    // @Column({length: 15})
      phoneNumber: z.string().max(16).regex(new RegExp(/^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/), "provide in this format (xx) xxxxx-xxxx"),

    // @Column({type: "date"})
      RegistrationDate: z.date(),

      client : z.number()
})

const createContactSchema = contactSchema.omit({
     RegistrationDate: true,
     id:true,
     client: true
})

const updateContactSchema = createContactSchema.partial()

export {createContactSchema, contactSchema, updateContactSchema }