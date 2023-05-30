import "express-async-errors";
import  express, {Application} from "express"
import { errorHandler } from "./errors";
import companyRoutes from "./routers/company.routes"
import contactsRoutes from "./routers/contacts.routes"
import clientRoutes from "./routers/client.routes"
import loginRoutes from "./routers/login.routes";

const app : Application = express()
app.use(express.json())

app.use("/company", companyRoutes)
app.use("/login", loginRoutes)
app.use("/contact", contactsRoutes)
app.use("/client", clientRoutes)


app.use(errorHandler)
export default app