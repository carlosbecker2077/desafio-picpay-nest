import { CreateUserDto } from "../dto/create-user.dto";
import {v4 as uuidv4 } from 'uuid'
import { Inject } from "@nestjs/common";
import { IPasswordHasher } from "src/utils/interfaces/IPasswordHasher";

export class UserHelper {
  constructor(@Inject(IPasswordHasher) private readonly passwordHasher: IPasswordHasher) {}
  async userObjectBuilder(createUserDto: CreateUserDto) {
    const hashedPassword = await this.passwordHasher.encryptPassword(createUserDto.password)
    const data = {
      userId: uuidv4(),
      name: createUserDto.name,
      document: createUserDto.document,
      email: createUserDto.email,
      password: hashedPassword,
      phone: createUserDto.phone,
      balance: createUserDto.balance,
      type: createUserDto.type,
      createdDate: new Date(),
      updatedDate: new Date(),
    }
    return data;
  }
}
