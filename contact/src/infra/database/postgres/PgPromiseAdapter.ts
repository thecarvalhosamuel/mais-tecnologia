import pgp from 'pg-promise';
import DatabaseConnection from '../DatabaseConnection';

export default class PgPromiseAdapter implements DatabaseConnection {
  private connection: any;
  private user = process.env.POSTGRES_USER;
  private passwd = process.env.POSTGRES_PASSWD;
  private dbname = process.env.POSTGRES_DBNAME;

  constructor() {
    this.connection = pgp()(`postgres://${this.user}:${this.passwd}@localhost:5432/${this.dbname}`);
  }

  async query(statement: string, params: any): Promise<any> {
    return this.connection.query(statement, params);
  }

  async close(): Promise<void> {
    await this.connection.$pool.end();
  }
}
