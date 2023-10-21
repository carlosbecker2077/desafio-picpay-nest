import { Transactions } from '@prisma/client';
import { CreateTransactionDto } from 'src/transactions/dto/create-transaction.dto';
import { ResponseTransactionDto } from 'src/transactions/dto/response-transaction.dto';

export interface ITransactionsRepository {
  create(data: CreateTransactionDto): Promise<ResponseTransactionDto>;
  findAll(): Promise<ResponseTransactionDto[]>;
  findOne(id: number): Promise<ResponseTransactionDto>;
}

export const ITransactionsRepository = Symbol('ITransactionsRepository');
