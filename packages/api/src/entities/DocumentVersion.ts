import { db } from "../db.ts";
import * as Types from "types";
import { Range } from "utils";
import { BadRequestError } from "../errors.ts";
import { ErrorCode } from "types";

export const DocumentVersion = {
  async create(data: Types.DocumentVersionCreatePayload) {
    await DocumentVersion.validate(data)
    return db.documentVersion.create({
      data
    });
  },

  async validate(data: Types.DocumentVersionCreatePayload | Types.DocumentVersionUpdatePayload, id?: string) {
    if (data.effectiveAt.getTime() > data.effectiveUntil.getTime())
      throw new BadRequestError(ErrorCode.DOCUMENT_VERSION_DATES_END_BEFORE_START)

    const documentVersions = await db.documentVersion.findMany({
      where: {
        documentId: data.documentId,
        ...id && { id: { not: id } },
      }
    })

    if (documentVersions.some(documentVersion => Range.overlap(
      [documentVersion.effectiveAt.getTime(), documentVersion.effectiveUntil.getTime()],
      [data.effectiveAt.getTime(), data.effectiveUntil.getTime()]
    )))
      throw new BadRequestError(ErrorCode.DOCUMENT_VERSION_DATES_OVERLAP_OTHER_DOCUMENT_VERSION)
  },

  async update(id: string, data: Types.DocumentVersionUpdatePayload) {
    await DocumentVersion.validate(data, id)
    return db.documentVersion.update({
      where: {
        id,
      },
      data,
    });
  },

  async delete(id: string) {
    return db.documentVersion.delete({
      where: { id }
    })
  }
}