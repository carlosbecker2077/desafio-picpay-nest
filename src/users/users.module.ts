import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { IUsersRepository } from 'src/infra/repositories/interfaces/IUserRepository';
import { UserRepository } from 'src/infra/repositories/UsersRepository';
import { IPasswordHasher } from 'src/utils/interfaces/IPasswordHasher';
import { PasswordHashing } from 'src/utils/PasswordHasher';
import { UserHelper } from './helpers/UserHelper';
import { IUsersService } from './interfaces/IUserService';

@Module({
  controllers: [UsersController],
  providers: [
    UsersService,
    UserHelper,
    { provide: IUsersRepository, useClass: UserRepository },
    { provide: IPasswordHasher, useClass: PasswordHashing },
    { provide: IUsersService, useClass: UsersService},
  ],
})
export class UsersModule { }
