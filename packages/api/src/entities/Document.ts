import { db } from "../db.ts";
import { Time, assert } from "utils";
import * as Types from 'types'

export const Document = {
  async list() {
    const documents = await db.document.findMany({
      include: {
        documentVersions: true
      }
    })

    return documents.map(document => {
      const { documentVersions, ...rest } = document
      const status = this.calculateStatus(documentVersions)
      return {
        ...rest,
        status,
      } satisfies Types.Documents[number]
    })
  },

  async retrieve(id: string) {
    return db.document.findUniqueOrThrow({
      where: {
        id,
      },
      include: {
        documentVersions: true,
        requirements: true,
      }
    })
  },

  calculateStatus(documentVersions: Types.DocumentVersion[]): Types.Documents[number]['status'] {
    if (!documentVersions.length)
      return 'MISSING'

    const today = Time.today()
    const activeDocumentVersions = documentVersions.filter(
      documentVersion =>
        documentVersion.effectiveAt.getTime() <= today.getTime() &&
        today.getTime() <= documentVersion.effectiveUntil.getTime()
    )
    if (!activeDocumentVersions.length) {
      // TODO check if this is not due only to future versions
      return 'OUTDATED'
    }

    const currentValidatedDocumentVersions = activeDocumentVersions
      .filter(documentVersion => documentVersion.status === 'VALIDATED')

    if (currentValidatedDocumentVersions.length)
      return "VALIDATED"

    const first = activeDocumentVersions[0]
    assert(first)
    assert(first.status === 'DRAFT')
    return 'DRAFT'
  }
}