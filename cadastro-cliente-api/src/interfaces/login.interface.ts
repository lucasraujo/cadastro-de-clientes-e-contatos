import { z } from "zod"
import { loginSchema } from "../schemas/login.schema"

type ILoginData = z.infer<typeof loginSchema>


export { ILoginData }