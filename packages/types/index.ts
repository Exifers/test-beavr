import { type Static, Type } from "@sinclair/typebox";

export enum ErrorCode {
  DOCUMENT_VERSION_DATES_END_BEFORE_START = 'DOCUMENT_VERSION_DATES_END_BEFORE_START',
  DOCUMENT_VERSION_DATES_OVERLAP_OTHER_DOCUMENT_VERSION = 'DOCUMENT_VERSION_DATES_OVERLAP_OTHER_DOCUMENT_VERSION'
}

export namespace Params {
  export const Id = Type.Object({
    id: Type.String(),
  })
}

export const DocumentVersion = Type.Object({
  id: Type.String(),
  content: Type.String(),
  status: Type.Union([Type.Literal("DRAFT"), Type.Literal("VALIDATED")]),
  effectiveAt: Type.Unsafe<Date>({ type: 'string' }),
  effectiveUntil: Type.Unsafe<Date>({ type: 'string' }),
})
export type DocumentVersion = Static<typeof DocumentVersion>

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

const Status = Type.Union([
  Type.Literal('VALIDATED'),
  Type.Literal('OUTDATED'),
  Type.Literal('DRAFT'),
  Type.Literal('MISSING'),
])

export const Requirement = Type.Object({
  id: Type.String(),
  name: Type.String(),
  description: Type.Union([Type.String(), Type.Null()])
})

export const Requirements = Type.Array(
  Type.Composite([
    Requirement,
    Type.Object({
      status: Status,
    })
  ])
)
export type Requirements = Static<typeof Requirements>

export const Document = Type.Object({
  id: Type.String(),
  title: Type.String(),
  description: Type.Union([Type.String(), Type.Null()]),
  documentVersions: Type.Array(DocumentVersion),
  requirements: Type.Array(Requirement)
})
export type Document = Static<typeof Document>

export const Documents = Type.Array(
  Type.Composite([
    Type.Omit(Document, ['requirements', 'documentVersions']),
    Type.Object({
      status: Status,
    })
  ])
)
export type Documents = Static<typeof Documents>