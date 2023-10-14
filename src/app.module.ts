import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { TransactionsModule } from './transactions/transactions.module';

@Module({
  imports: [UsersModule, PrismaModule, TransactionsModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
