import { DocumentVersionStatus } from "@prisma/client";
import { db } from "../db.ts";
import { Time } from "utils";

export const Requirement = {
  async list() {
    const today = Time.today()

    return db.requirement.findMany({
      include: {
        documents: {
          include: {
            documentVersions: true
          },
          where: {
            documentVersions: {
              some: {
                status: DocumentVersionStatus.VALIDATED,
                effectiveAt: { lte: today },
                effectiveUntil: { gte: today },
              }
            }
          }
        }
      }
    })
  }
}