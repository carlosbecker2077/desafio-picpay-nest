import { Inject, Injectable } from '@nestjs/common';
import { IUsersService } from 'src/users/interfaces/IUserService';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { ITransactionsRepository } from 'src/infra/repositories/interfaces/ITransactionsRepository';

@Injectable()
export class TransactionsService {
  constructor(

    @Inject(IUsersService) private readonly userService: IUsersService,
    @Inject(ITransactionsRepository) private readonly transactionsRepository: ITransactionsRepository,
  ) {};
  async create(createTransactionDto: CreateTransactionDto) {
    const isLojista = await this.userService.findOne(createTransactionDto.senderId);
    if (isLojista.type === 'lojista') {
      throw new Error('é lojista');
    }

    if (isLojista.balance < createTransactionDto.amount) {
      throw new Error('não tem saldo');
    }

    const targetUser = await this.userService.findOne(createTransactionDto.receiverId);


    isLojista.balance = isLojista.balance - createTransactionDto.amount;
    console.log('DINHEIRO SAINDO', isLojista.balance)
    targetUser.balance = targetUser.balance + createTransactionDto.amount
    console.log('DINHEIRO ENTRANDO', targetUser.balance)
    await this.userService.update(createTransactionDto.senderId, isLojista);
    await this.userService.update(createTransactionDto.receiverId, targetUser); 

    await this.transactionsRepository.create(createTransactionDto)
  }

}
