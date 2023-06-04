import { z } from "zod"

const addContactSchema = z.object({
	UpId:z.string(),
    fullName: z.string().max(120),
	email: z.string().max(120).email("Enter a valid email address"),
	phoneNumber: z.string().max(16).regex(new RegExp(/^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/), "provide in this format (xx) xxxxx-xxxx"), 

})

export type IAddContact = z.infer<typeof addContactSchema>

export { addContactSchema }