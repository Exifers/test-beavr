import { Type, type Static } from "@sinclair/typebox";

export namespace Params {
  export const Id = Type.Object({
    id: Type.String(),
  })
}

export const DocumentVersion = Type.Object({
  id: Type.String(),
  content: Type.String(),
  status: Type.Union([Type.Literal("DRAFT"), Type.Literal("VALIDATED")]),
  effectiveAt: Type.Unsafe<Date>({ type: 'string', format: 'date' }),
  effectiveUntil: Type.Unsafe<Date>({ type: 'string', format: 'date' }),
})

export const DocumentVersionCreatePayload = Type.Composite([
  Type.Omit(DocumentVersion, ['id']),
  Type.Object({
    documentId: Type.String(),
  }),
])

export type DocumentVersionCreatePayload = Static<typeof DocumentVersionCreatePayload>

export const DocumentVersionUpdatePayload = Type.Composite([
  Type.Omit(DocumentVersion, ['id']),
  Type.Object({
    documentId: Type.String(),
  }),
])

export type DocumentVersionUpdatePayload = Static<typeof DocumentVersionUpdatePayload>

export const Document = Type.Object({
  id: Type.String(),
  title: Type.String(),
  description: Type.Union([Type.String(), Type.Null()]),
  documentVersions: Type.Array(DocumentVersion)
})
export type Document = Static<typeof Document>

export const Documents = Type.Array(Document)
export type Documents = Static<typeof Documents>

export const Requirement = Type.Object({
  id: Type.String(),
  name: Type.String(),
  description: Type.Union([Type.String(), Type.Null()]),
  documents: Type.Array(Document)
})

export const Requirements = Type.Array(Requirement)
export type Requirements = Static<typeof Requirements>