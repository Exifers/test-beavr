import { db } from "../db.ts";
import { Time } from "utils";

export const Document = {
  async list() {
    const today = Time.today()

    return db.document.findMany({
      include: {
        requirements: true,
        documentVersions: {
          where: {
            effectiveAt: { lte: today },
            effectiveUntil: { gte: today },
          }
        }
      }
    })
  },

  async retrieve(id: string) {
    return db.document.findUniqueOrThrow({
      where: {
        id,
      },
      include: {
        documentVersions: true,
      }
    })
  }
}