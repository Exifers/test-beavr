import { PrismaClient } from '@prisma/client'

export const db = new PrismaClient()

export const PrismaErrorCode = {
  NOT_FOUND: 'P2025'
}