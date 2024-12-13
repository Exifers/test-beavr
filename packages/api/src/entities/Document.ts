import { db } from "../db.ts";
import { Time } from "utils";
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

  calculateStatus(documentVersions: Types.DocumentVersion[]) {
    let status: Types.Documents[number]['status']
    if (!documentVersions.length)
      status = 'MISSING'
    else {
      const today = Time.today()
      const currentDocumentVersion = documentVersions.find(
        documentVersion =>
          documentVersion.effectiveAt.getTime() <= today.getTime() &&
          today.getTime() <= documentVersion.effectiveUntil.getTime()
      )
      if (!currentDocumentVersion) {
        // TODO check if this is not due only to future versions
        status = 'OUTDATED'
      }
      else {
        switch (currentDocumentVersion.status) {
          case "DRAFT":
            status = 'DRAFT'
            break
          case "VALIDATED":
            status = 'VALIDATED'
            break
        }
      }
    }
    return status
  }
}