import DatabaseConnection from '@database/DatabaseConnection';
import { Contact } from '@domain/models/Contact';
import { ContactRepository } from '@domain/repositories/contactRepository';
import { ContactAdapter } from '@http/Adapters/ContactAdapter';

export class ContactPgReposiory implements ContactRepository {
  private adapter: ContactAdapter;

  constructor(readonly connection: DatabaseConnection) {
    this.adapter = new ContactAdapter();
  }

  async create(contact: Contact): Promise<void> {
    const { contact_id, name, email, message } = this.adapter.doamainToData(contact);
    await this.connection
      .query(
        `INSERT INTO contact(contact_id, name, email, message)
        values ($1, $2, $3, $4)`,
        [contact_id, name, email, message]
      )
      .catch((error) => {
        console.error(error.message);
      });
  }
}
