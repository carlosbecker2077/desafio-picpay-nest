import { Users } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { IUsersRepository } from './interfaces/IUserRepository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository implements IUsersRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(data: Users): Promise<Users> {
    return await this.prismaService.users.create({ data });
  }

  async findAll(): Promise<Users[]> {
    return await this.prismaService.users.findMany();
  }

  async findOne(userId: string): Promise<Users> {
    return await this.prismaService.users.findUniqueOrThrow({
      where: { userId },
    });
  }

  async update(userId: string, data: Users): Promise<Users> {
    return await this.prismaService.users.update({
      where: { userId },
      data,
    });
  }

  async remove(userId: string): Promise<Users> {
    return await this.prismaService.users.delete({
      where: { userId },
    });
  }
}
