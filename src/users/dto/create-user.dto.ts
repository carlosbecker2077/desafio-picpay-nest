import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
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

  @IsString() 
  @IsNotEmpty()
  public type: string;
}
