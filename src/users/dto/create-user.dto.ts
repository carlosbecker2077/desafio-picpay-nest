import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { UserTypeEnum } from '../helpers/UserTypeEnum';
export class CreateUserDto {
  @IsString() 
  @IsNotEmpty()
  public name: string;
  
  @IsNotEmpty()
  @IsString() 
  public document: string;

  @IsString() 
  @IsNotEmpty()
  public email: string;

  @IsString() 
  @IsNotEmpty()
  public password: string;

  @IsString() 
  @IsNotEmpty()
  public phone: string;
  
  @IsNotEmpty()
  @IsNumber()
  public balance: number;

  @IsEnum(UserTypeEnum)
  @IsNotEmpty()
  public type: string;
}
