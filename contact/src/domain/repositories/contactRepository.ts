import { Contact } from '@domain/models/Contact';

export type ContactRepository = {
  create(contact: Contact): void;
};
