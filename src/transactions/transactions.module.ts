import { Module } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { TransactionsController } from './transactions.controller';
import { UsersModule } from 'src/users/users.module';
import { TransactionsRepository } from 'src/infra/repositories/TransactionsRepository';
import { ITransactionsRepository } from 'src/infra/repositories/interfaces/ITransactionsRepository';

@Module({
  imports: [UsersModule],
  controllers: [TransactionsController],
  providers: [TransactionsService,
    { provide: ITransactionsRepository, useClass: TransactionsRepository}]
})
export class TransactionsModule {}
