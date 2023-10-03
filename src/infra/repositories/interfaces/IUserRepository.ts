import { Users } from '@prisma/client';

export interface IUsersRepository {
  create(data: Users): Promise<Users>;
  findAll(): Promise<Users[]>;
  findOne(userId: string): Promise<Users>;
  update(userId: string, data: Users): Promise<Users>;
  remove(userId: string): Promise<Users>;
}
