// eslint-disable-next-line max-classes-per-file
export class NotFoundError extends Error {
  statusCode: number;
  message: string;

  constructor(message: string, title = 'Not found') {
    super(title);
    this.message = message;
    this.statusCode = 404;
  }
}

export class ConflictError extends Error {
  statusCode: number;

  constructor(message: string, title = 'Conflict') {
    super(title);
    this.message = message;
    this.statusCode = 409;
  }
}

export class UnauthorizedError extends Error {
  statusCode: number;

  constructor(message: string, title = 'Unauthorized') {
    super(title);
    this.message = message;
    this.statusCode = 401;
  }
}

export class BadRequestError extends Error {
  statusCode: number;

  constructor(message: string, title = 'Bad Request') {
    super(title);
    this.message = message;
    this.statusCode = 400;
  }
}

export class ForbiddenError extends Error {
  statusCode: number;

  constructor(message: string, title = 'Forbidden') {
    super(title);
    this.message = message;
    this.statusCode = 403;
  }
}
