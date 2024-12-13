import type { FastifyError } from "fastify"
import type { ErrorCode } from "types";

class BaseError extends Error implements FastifyError {
  statusCode = 500
  constructor(
    public code: ErrorCode,
    public override message = '',
  ) {
    super(message);
  }
}

export class BadRequestError extends BaseError {
  override statusCode = 400
}