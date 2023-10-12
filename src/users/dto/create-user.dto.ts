import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
export class CreateUserDto {
  @IsString() 
  @IsNotEmpty()
  public name: string;
  
  @IsNotEmpty()
  @IsString() 
  document: string;

  @IsString() 
  @IsNotEmpty()
  email: string;

  @IsString() 
  @IsNotEmpty()
  password: string;

  @IsString() 
  @IsNotEmpty()
  phone: string;
  
  @IsNotEmpty()
  @IsNumber()
  balance: number;

  @IsString() 
  @IsNotEmpty()
  type: string;
}
