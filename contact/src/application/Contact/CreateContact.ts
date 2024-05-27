import { Contact } from '@domain/models/Contact';
import { ContactRepository } from '@domain/repositories/contactRepository';

export class CreateContact {
  constructor(readonly repository: ContactRepository) {}

  async execute(input: Input): Promise<Output> {
    const contact = Contact.create(input);
    await this.repository.create(contact);
    return {
      contactId: contact.id,
    };
  }
}

type Input = {
  name: string;
  email: string;
  message: string;
};
type Output = {
  contactId: string;
};
