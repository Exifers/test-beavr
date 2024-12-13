import fastify from "fastify";
import type { TypeBoxTypeProvider } from "@fastify/type-provider-typebox";
import { PrismaErrorCode } from "./db.ts";
import { Data } from "utils";
import cors from "@fastify/cors";

export const server = fastify({ logger: true })
  .withTypeProvider<TypeBoxTypeProvider>();

server.setErrorHandler((error, _, reply) => {
  if (error.code === PrismaErrorCode.NOT_FOUND)
    return reply.status(404).send()
  if (error.statusCode)
    return reply.status(error.statusCode).send({ code: error.code, message: error.message })

  console.error(error)

  return reply.status(500).send()
})

server.addHook('preHandler', async (request) => {
  Data.parseDates(request.body)
})

await server.register(cors, {
  origin: '*'
})


