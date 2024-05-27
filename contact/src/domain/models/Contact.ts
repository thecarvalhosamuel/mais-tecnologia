import { BadRequestError } from '@shared/errors/errors';
import Email from './Email';
import { randomUUID } from 'crypto';

type ContactProps = {
  id: string;
  name: string;
  email: Email;
  message: string;
};
type ContactCreateProps = {
  id?: string | null;
  name: string;
  email: string;
  message: string;
};

export class Contact {
  private params: ContactProps;

  constructor(contact: ContactProps) {
    this.params = contact;
  }

  static create({ id, name, email, message }: ContactCreateProps): Contact {
    if (name.trim().length === 0) {
      throw new BadRequestError('Name must not be empty.');
    }
    if (email.trim().length === 0) {
      throw new BadRequestError('Email must not be empty.');
    }
    if (message.trim().length === 0) {
      throw new BadRequestError('Message must not be empty.');
    }

    const validEmail = new Email(email);

    return new Contact({
      id: !id ? randomUUID() : id,
      name,
      email: validEmail,
      message,
    });
  }

  public get id(): string {
    return this.params.id;
  }
  public get name(): string {
    return this.params.name;
  }
  public get email(): Email {
    return this.params.email;
  }
  public get message(): string {
    return this.params.message;
  }
}
