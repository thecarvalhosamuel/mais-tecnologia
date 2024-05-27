export default class HelloWorld {
  constructor() {}

  async execute(): Promise<Output> {
    const date = new Date();
    return {
      message: `Hello world, it's ${date.toLocaleString('pt-BR')}`,
    };
  }
}

type Output = {
  message: string;
};
