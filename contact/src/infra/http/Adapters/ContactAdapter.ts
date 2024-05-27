import { Contact } from '@domain/models/Contact';

export class ContactAdapter {
  doamainToData(contactDomain: Contact): any {
    return {
      contact_id: contactDomain.id,
      name: contactDomain.name,
      email: contactDomain.email.value,
      message: contactDomain.message,
    };
  }

  dataToDomain(contactData: any): Contact {
    const contact = Contact.create({
      id: contactData.contact_id,
      name: contactData.name,
      email: contactData.email,
      message: contactData.message,
    });

    return contact;
  }
}
