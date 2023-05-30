import { z } from "zod";
import { createClientResponseSchema, createClientSchema, updatedClientSchema } from "../schemas/client.schema";


type ICreateClient = z.infer<typeof createClientSchema>
type IUpdatedClient = z.infer<typeof updatedClientSchema>
type ICreateClientResponse = z.infer<typeof createClientResponseSchema>

export {ICreateClient, IUpdatedClient, ICreateClientResponse}