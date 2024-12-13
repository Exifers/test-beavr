import { db } from "../db.ts";
import { Time } from "utils";
import * as Types from 'types';
import { Document } from "./Document.ts";

export const Requirement = {
  async list() {
    const requirements = await db.requirement.findMany({
      include: {
        documents: {
          include: {
            documentVersions: true
          }
        }
      }
    })

    return requirements.map(requirement => {
      const { documents, ...rest } = requirement
      const documentVersions = documents
        .map(document => document.documentVersions)
        .flat()
      const status = Document.calculateStatus(documentVersions)
      return {
        ...rest,
        status,
      } satisfies Types.Requirements[number]
    })
  }
}