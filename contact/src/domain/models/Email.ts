import { BadRequestError } from '@shared/errors/errors';

export default class Email {
  value: string;
  constructor(value: string) {
    if (!this.validate(value)) throw new BadRequestError('Invalid email.');
    this.value = value;
  }

  private validate(email: string) {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  }
}
