import { Users } from '@prisma/client';
import { ResponseUserDto } from 'src/users/dto/response-user.dto';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';

export interface IUsersRepository {
  create(data: Users): Promise<Users>;
  findAll(): Promise<ResponseUserDto[]>;
  findOne(userId: string): Promise<ResponseUserDto>;
  update(userId: string, data: UpdateUserDto): Promise<ResponseUserDto>;
  remove(userId: string): Promise<Users>;
}

export const IUsersRepository = Symbol('IUsersRepository');
