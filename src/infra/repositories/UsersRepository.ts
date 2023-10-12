import { Users } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { IUsersRepository } from './interfaces/IUserRepository';
import { Injectable } from '@nestjs/common';
import { ResponseUserDto } from 'src/users/dto/response-user.dto';

@Injectable()
export class UserRepository implements IUsersRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(data: Users): Promise<ResponseUserDto> {
    const createdUser: ResponseUserDto = await this.prismaService.users.create({ data });
    return createdUser;
  }

  async findAll(): Promise<ResponseUserDto[]> {
    return await this.prismaService.users.findMany({
      select: {
        userId: true,
        name: true,
        document: true,
        email: true,
        phone: true,
        balance: true,
        type: true,
      },
    });
  }

  async findOne(userId: string): Promise<ResponseUserDto> {
    return await this.prismaService.users.findUniqueOrThrow({
      where: { userId },
      select: {
        userId: true,
        name: true,
        document: true,
        email: true,
        phone: true,
        balance: true,
        type: true,
      }
    });
  }

  async update(userId: string, data: Users): Promise<ResponseUserDto> {
    const user = await this.prismaService.users.update({
      where: { userId },
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        balance: data.balance,
        type: data.type,
      },
    });
    delete user.password;
    return user;
  }

  async remove(userId: string): Promise<ResponseUserDto> {
    const removedUser: ResponseUserDto = await this.prismaService.users.delete({
      where: { userId },
    });
    return removedUser;
  }
}
