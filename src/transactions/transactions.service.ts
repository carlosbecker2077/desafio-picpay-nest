import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';

@Injectable()
export class TransactionsService {
  create(createTransactionDto: CreateTransactionDto) {
    const isLojista = await this.findOne(senderId);
    if (isLojista.type === 'lojista') {
      throw new Error('é lojista');
    }

    if (isLojista.balance < amount) {
      throw new Error('não tem saldo');
    }

    const targetUser = await this.findOne(receiverId);


    isLojista.balance = isLojista.balance - amount;
    console.log('DINHEIRO SAINDO', isLojista.balance)
    targetUser.balance = targetUser.balance + amount
    console.log('DINHEIRO ENTRANDO', targetUser.balance)
    await this.update(senderId, isLojista);
    await this.update(receiverId, targetUser); 
  }

}
