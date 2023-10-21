import { Transactions } from '@prisma/client';
import { ResponseTransactionDto } from 'src/transactions/dto/response-transaction.dto';

export interface ITransactionsRepository {
  create(data: Transactions): Promise<ResponseTransactionDto>;
  findAll(): Promise<ResponseTransactionDto[]>;
  findOne(id: number): Promise<ResponseTransactionDto>;
}

export const ITransactionsRepository = Symbol('ITransactionsRepository');
