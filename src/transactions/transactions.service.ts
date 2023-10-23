import { HttpException, Inject, Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { ITransactionsRepository } from 'src/infra/repositories/interfaces/ITransactionsRepository';
import { UserTypeEnum } from 'src/users/helpers/UserTypeEnum';
import { IUsersRepository } from 'src/infra/repositories/interfaces/IUserRepository';

@Injectable()
export class TransactionsService {
  constructor(

    @Inject(IUsersRepository) private readonly usersRepository: IUsersRepository,
    @Inject(ITransactionsRepository) private readonly transactionsRepository: ITransactionsRepository,
  ) {};
  async create(createTransactionDto: CreateTransactionDto) {
    const isMerchant = await this.usersRepository.findOne(createTransactionDto.senderId);
    if (isMerchant.type === UserTypeEnum.MERCHANT) {
      throw new HttpException(`User of type ${UserTypeEnum.MERCHANT} cannot make transactions.`, 400);
    }

    if (isMerchant.balance < createTransactionDto.amount) {
      throw new HttpException(`Sender has insufficient balance.`, 400);
    }
    const targetUser = await this.usersRepository.findOne(createTransactionDto.receiverId);


    isMerchant.balance = isMerchant.balance - createTransactionDto.amount;
    targetUser.balance = targetUser.balance + createTransactionDto.amount

    await this.usersRepository.updateBalance(createTransactionDto.senderId, isMerchant);
    await this.usersRepository.updateBalance(createTransactionDto.receiverId, targetUser); 
    await this.transactionsRepository.create(createTransactionDto)
  }

}
