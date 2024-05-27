export default interface HttpServer {
  on(method: string, url: string, callback: Function): void;
  // on(method: HTTPMethods, url: string, callback: Function): void
  listen(port: number, hostname?: string | null): void;
  // register(url: string, callback: Function): void
}

export type HTTPMethods = 'DELETE' | 'GET' | 'HEAD' | 'PATCH' | 'POST' | 'PUT' | 'OPTIONS';
