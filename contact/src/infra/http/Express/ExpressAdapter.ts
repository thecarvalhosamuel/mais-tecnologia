/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import express, { Request, Response } from 'express';
import HttpServer from '../HttpServer';
import bodyParser from 'body-parser';

export default class ExpressAdapter implements HttpServer {
  private app: any;

  constructor() {
    this.app = express();
    this.app.use(express.json());
    this.app.use(bodyParser.json({ limit: '50mb' }));
  }

  // on(method: METHOD, url: string, callback: Function): void {
  on(method: string, url: string, callback: Function): void {
    this.app[method](url, async function (req: Request, res: Response) {
      try {
        const output = await callback(req.params, req.body);
        res.json(output);
      } catch (error: any) {
        res.status(422).send(error.message);
      }
    });
  }

  listen(port: number): void {
    this.app.listen(port, () => {
      console.log(`[server]: Server is running at http://localhost:${port}`);
    });
  }
}

// type METHOD = 'GET' | 'POST' | 'DELETE' | 'FETCH'
