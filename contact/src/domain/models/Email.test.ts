import { expect, it } from 'vitest';
import Email from './Email';

it('Deve validar o email', function () {
  const email = new Email('john.doe@gmail.com');
  expect(email).toBeTruthy();
});

it('Não deve validar um email inválido', function () {
  const email = 'john.doe@gmail';
  expect(() => new Email(email)).toThrow(new Error('Invalid email.'));
});
