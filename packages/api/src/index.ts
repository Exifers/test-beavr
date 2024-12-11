/// <reference path="./vite-env.d.ts" />
import fastify from "fastify";
import { Requirement } from "./entities/Requirement.ts";
import { Document } from "./entities/Document.ts";
import { DocumentVersion } from "./entities/DocumentVersion.ts";
import type { TypeBoxTypeProvider } from "@fastify/type-provider-typebox";
import * as Types from "types";
import cors from '@fastify/cors';
import { PrismaErrorCode } from "./db.ts";

export const server = fastify({ logger: true })
  .withTypeProvider<TypeBoxTypeProvider>();

server.get("/requirements", {
  schema: {
    response: {
      200: Types.Requirements
    }
  }
}, async () => Requirement.list())

server.get("/documents", {
  schema: {
    response: {
      200: Types.Documents,
    }
  }
}, async () => Document.list())

server.get("/documents/:id", {
  schema: {
    params: Types.Params.Id,
    response: {
      200: Types.Document,
    }
  },
}, async (request) => {
  const { id } = request.params
  return Document.retrieve(id);
})

server.post("/documentVersions", {
  schema: {
    body: Types.DocumentVersionCreatePayload,
    response: {
      200: Types.DocumentVersion,
    }
  }
}, async (request, reply) => {
  const data = request.body;
  const documentVersion = await DocumentVersion.create(data)
  return reply.status(201).send(documentVersion)
})

server.put("/documentVersions/:id", {
  schema: {
    params: Types.Params.Id,
    body: Types.DocumentVersionUpdatePayload,
    response: {
      200: Types.DocumentVersion,
    }
  }
} as const, async (request) => {
  const { id } = request.params
  const data = request.body
  return DocumentVersion.update(id, data)
})

server.delete("/documentVersions/:id", {
  schema: {
    params: Types.Params.Id,
  }
}, async (request, reply) => {
  const { id } = request.params
  await DocumentVersion.delete(id)
  return reply.status(204)
})

server.setErrorHandler((error, request, reply) => {
  if (error.code === PrismaErrorCode.NOT_FOUND)
    return reply.status(404).send()

  console.error(error)

  return reply.status(500).send()
})

await server.register(cors, {
  origin: '*'
})

if (import.meta.env.PROD)
  await server.listen({ port: 3000 });

