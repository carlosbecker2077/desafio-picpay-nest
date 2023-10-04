import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { IUsersRepository } from 'src/infra/repositories/interfaces/IUserRepository';
import { UserRepository } from 'src/infra/repositories/UsersRepository';

@Module({
  controllers: [UsersController],
  providers: [
    UsersService,
    { provide: IUsersRepository, useClass: UserRepository },
  ],
})
export class UsersModule {}
