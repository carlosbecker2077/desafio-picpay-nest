import { Module } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { TransactionsController } from './transactions.controller';
import { UsersModule } from 'src/users/users.module';
import { TransactionsRepository } from 'src/infra/repositories/TransactionsRepository';
import { ITransactionsRepository } from 'src/infra/repositories/interfaces/ITransactionsRepository';
import { UserRepository } from 'src/infra/repositories/UsersRepository';
import { IUsersRepository } from 'src/infra/repositories/interfaces/IUserRepository';

@Module({
  imports: [],
  controllers: [TransactionsController],
  providers: [TransactionsService,
    { provide: ITransactionsRepository, useClass: TransactionsRepository},
    { provide: IUsersRepository, useClass: UserRepository},
  ]
})
export class TransactionsModule {}
