import * as Types from "types";
import { Requirement } from "./entities/Requirement.ts";
import { Document } from "./entities/Document.ts";
import { DocumentVersion } from "./entities/DocumentVersion.ts";
import { server } from "./server.ts";

server.get('/ping', () => 'pong')

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
  return reply.status(204).send()
})