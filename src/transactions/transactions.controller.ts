import { Controller, Post, Body, HttpException, HttpStatus} from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Post()
  create(@Body() createTransactionDto: CreateTransactionDto) {
    try {
      return this.transactionsService.create(createTransactionDto);
    } catch (error) {
      throw new HttpException(
        error,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

}
