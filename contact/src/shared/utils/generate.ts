export function randomString(length: number): string {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export function randomNumber(length: number): string {
  let result = '';
  const characters = '0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-') // Substitui espaços em branco por hífens
    .replace(/[^\w\-]+/g, '') // Remove caracteres não alfanuméricos exceto hífens
    .replace(/\-\-+/g, '-') // Substitui múltiplos hífens por um único hífen
    .substring(0, 100); // Limita o slug a 100 caracteres (opcional)
}

export function verifyUUID(text: string): boolean {
  if (text.length === 36) {
    const divided = text.split('-');
    if (divided.length !== 5) {
      return false;
    }
    return true;
  }
  return false;
}

export function randomEmail(): string {
  const username = randomString(10);
  const domain = `${randomString(10)}.${randomString(3)}`;
  const email = `${username}@${domain}`;
  return email;
}
