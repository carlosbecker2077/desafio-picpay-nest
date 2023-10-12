export interface IPasswordHasher {
  encryptPassword(password: string): Promise<string>;
  comparePassword(
    inputPassword: string,
    hashedPassword: string,
  ): Promise<boolean>;
}

export const IPasswordHasher = Symbol('IPasswordHasher');
