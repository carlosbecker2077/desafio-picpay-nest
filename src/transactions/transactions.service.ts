import { Inject, Injectable } from '@nestjs/common';
import { IUsersService } from 'src/users/interfaces/IUserService';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { ITransactionsRepository } from 'src/infra/repositories/interfaces/ITransactionsRepository';
import { UserTypeEnum } from 'src/users/helpers/UserTypeEnum';

@Injectable()
export class TransactionsService {
  constructor(

    @Inject(IUsersService) private readonly userService: IUsersService,
    @Inject(ITransactionsRepository) private readonly transactionsRepository: ITransactionsRepository,
  ) {};
  async create(createTransactionDto: CreateTransactionDto) {
    const isMerchant = await this.userService.findOne(createTransactionDto.senderId);
    if (isMerchant.type === UserTypeEnum.MERCHANT) {
      throw new Error(`User of type ${UserTypeEnum.MERCHANT} cannot make transactions.`);
    }

    if (isMerchant.balance < createTransactionDto.amount) {
      throw new Error(`Sender has insufficient balance.`);
    }
    const targetUser = await this.userService.findOne(createTransactionDto.receiverId);


    isMerchant.balance = isMerchant.balance - createTransactionDto.amount;
    targetUser.balance = targetUser.balance + createTransactionDto.amount

    await this.userService.update(createTransactionDto.senderId, isMerchant);
    await this.userService.update(createTransactionDto.receiverId, targetUser); 
    await this.transactionsRepository.create(createTransactionDto)
  }

}
