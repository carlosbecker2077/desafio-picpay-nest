import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
export class CreateTransactionDto {
  @IsString()
  @IsNotEmpty()
  senderId: string;
  @IsString()
  @IsNotEmpty()
  receiverId: string;
  @IsNumber()
  @IsNotEmpty()
  amount: number;

}
