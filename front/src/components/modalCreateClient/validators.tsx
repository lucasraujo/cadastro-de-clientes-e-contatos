import { z } from "zod"

const createClientSchema = z.object({

    fullName: z.string().max(120).nonempty("this field cannot be empty"),
	email: z.string().max(120).email("Enter a valid email address").nonempty("this field cannot be empty"),
	phoneNumber: z.string().max(16).regex(new RegExp(/^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/), "provide in this format (xx) xxxxx-xxxx"), 

})

export type ICreateClientForm = z.infer <typeof createClientSchema>


export { createClientSchema }