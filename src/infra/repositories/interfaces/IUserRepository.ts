import { Users } from '@prisma/client';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';

export interface IUsersRepository {
  create(data: CreateUserDto): Promise<Users>;
  findAll(): Promise<Users[]>;
  findOne(userId: string): Promise<Users>;
  update(userId: string, data: UpdateUserDto): Promise<Users>;
  remove(userId: string): Promise<Users>;
}

export const IUsersRepository = Symbol('IUsersRepository');
