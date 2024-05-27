import { CreateContact } from '@application/Contact/CreateContact';
import HelloWorld from '@application/HelloWorld';
import PgPromiseAdapter from '@database/postgres/PgPromiseAdapter';
import { ContactPgReposiory } from '@database/postgres/repositories/contactPgRepository';
import ExpressAdapter from '@http/Express/ExpressAdapter';
import ExpressController from '@http/Express/ExpressController';

const port = process.env.PORT ? parseInt(process.env.PORT) : 3333;

const httpServer = new ExpressAdapter();
const connection = new PgPromiseAdapter();

// repositories
const contactRepository = new ContactPgReposiory(connection);

const helloWorld = new HelloWorld();
// contact
const createContact = new CreateContact(contactRepository);

new ExpressController(httpServer, helloWorld, createContact);

httpServer.listen(port);
