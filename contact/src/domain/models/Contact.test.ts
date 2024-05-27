import { randomEmail, randomString } from '@shared/utils/generate';
import { randomUUID } from 'crypto';
import { describe, it, expect } from 'vitest';
import { Contact } from './Contact';
import { BadRequestError } from '@shared/errors/errors';

describe('Contact suit', () => {
  it('Should create a contact info.', () => {
    const id = randomUUID();
    const name = randomString(20);
    const email = randomEmail();
    const message = randomString(300);

    const contact = Contact.create({
      id,
      name,
      email,
      message,
    });

    expect(contact.id).toBe(id);
    expect(contact.name).toBe(name);
    expect(contact.email.value).toBe(email);
    expect(contact.message).toBe(message);
  });

  it('Should not create a contact info case name is empty.', () => {
    const name = '';
    const email = randomEmail();
    const message = randomString(300);
    expect(() => {
      Contact.create({
        name,
        email,
        message,
      });
    }).throw(new BadRequestError('Name must not be empty.').message);
  });

  it('Should not create a contact info case email is empty.', () => {
    const name = randomString(10);
    const email = '';
    const message = randomString(300);
    expect(() => {
      Contact.create({
        name,
        email,
        message,
      });
    }).throw(new BadRequestError('Email must not be empty.').message);
  });
  it('Should not create a contact info case email is not valid.', () => {
    const name = randomString(10);
    const email = `${randomString(10)}@asd.q`;
    const message = randomString(300);
    expect(() => {
      Contact.create({
        name,
        email,
        message,
      });
    }).throw(new BadRequestError('Invalid email.').message);
  });
  it('Should not create a contact info case message is empty.', () => {
    const name = randomString(10);
    const email = randomEmail();
    const message = '';
    expect(() => {
      Contact.create({
        name,
        email,
        message,
      });
    }).throw(new BadRequestError('Message must not be empty.').message);
  });
});
