import {z} from "zod"
import { createContactSchema, updateContactSchema } from "../schemas/contact.schema"

type ICreateContact = z.infer<typeof createContactSchema>
type IUpdateContact = z.infer<typeof updateContactSchema>

export { ICreateContact, IUpdateContact }