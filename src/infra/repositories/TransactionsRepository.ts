import { Injectable } from "@nestjs/common";
import { Transactions } from "@prisma/client";
import { ResponseTransactionDto } from "src/transactions/dto/response-transaction.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { ITransactionsRepository } from "./interfaces/ITransactionsRepository";

@Injectable()
export class TransactionsRepository implements ITransactionsRepository {
  constructor(private readonly prismaService: PrismaService) {}


  async create(data: Transactions): Promise<ResponseTransactionDto> {
    const createdTransaction: ResponseTransactionDto = await this.prismaService.transactions.create({ data });
    return createdTransaction;
  }

  async findAll(): Promise<ResponseTransactionDto[]> {
    return await this.prismaService.transactions.findMany({
      select: {
        id: true,
        amount: true,
        senderId: true,
        receiverId: true,
        createdDate: true,
      },
    });
  }

  async findOne(id: number): Promise<ResponseTransactionDto> {
    return await this.prismaService.transactions.findUniqueOrThrow({
      where: { id },
      select: {
        id: true,
        amount: true,
        senderId: true,
        receiverId: true,
        createdDate: true,
      },
    });
  }
}
