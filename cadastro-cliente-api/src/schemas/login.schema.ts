import { z } from "zod"

const loginSchema = z.object({
    
    //@Column({unique: true, length: 120})
    companyName:z.string().max(120),

    //@Column({length:120})
    password:z.string().max(120),

})



export {loginSchema}