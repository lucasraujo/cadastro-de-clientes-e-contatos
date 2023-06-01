import { z } from "zod"

const loginSchema = z.object({
    companyName: z.string().max(120).nonempty("this field cannot be empty"),
    password: z.string().max(35).nonempty("this field cannot be empty"),
})

export type ILoguin = z.infer<typeof loginSchema>


export { loginSchema }