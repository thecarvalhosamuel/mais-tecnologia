declare namespace NodeJS {
  export interface ProcessEnv {
    POSTGRES_USER: string;
    POSTGRES_PASSWD: string;
    POSTGRES_DBNAME: string;
  }
}
