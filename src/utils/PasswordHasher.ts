import * as bcrypt from 'bcrypt';
import { IPasswordHasher } from './interfaces/IPasswordHasher';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PasswordHashing implements IPasswordHasher {
  public async encryptPassword(password: string): Promise<string> {
    const salt = await this.generateSalt();
    const hash = await bcrypt.hash(password, salt);
    return hash;
  }

  public async comparePassword(
    inputPassword: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return await bcrypt.compare(inputPassword, hashedPassword);
  }

  private async generateSalt(): Promise<string> {
    const min = 1;
    const max = 10;
    const salt = Math.random() * (max - min) + min;
    return await bcrypt.genSalt(salt);
  }
}
