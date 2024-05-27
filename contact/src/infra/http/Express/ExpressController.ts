import { CreateContact } from '@application/Contact/CreateContact';
import HelloWorld from '@application/HelloWorld';
import HttpServer from '@http/HttpServer';

const API = '/api';

export default class ExpressController {
  constructor(
    httpServer: HttpServer,
    helloworld: HelloWorld,
    // contact
    createContact: CreateContact
  ) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
    httpServer.on('get', `${API}/`, async function (params: any, body: any) {
      const output = helloworld.execute();
      return output;
    });

    httpServer.on('post', `${API}/contact`, async function (params: any, body: any) {
      const { name, email, message } = body;
      const output = createContact.execute({ name, email, message });
      return output;
    });
  }
}
