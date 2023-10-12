import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { IUsersRepository } from 'src/infra/repositories/interfaces/IUserRepository';
import { UserHelper } from './helpers/UserHelper';
import { ResponseUserDto } from './dto/response-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @Inject(IUsersRepository)
    private readonly usersRepository: IUsersRepository,
    @Inject(UserHelper) private readonly userHelper: UserHelper,
  ) { }
  async create(createUserDto: CreateUserDto): Promise<ResponseUserDto> {
    const data = await this.userHelper.userObjectBuilder(createUserDto);
    return await this.usersRepository.create(data);
  }

  findAll(): Promise<ResponseUserDto[]> {
    return this.usersRepository.findAll();
  }

  findOne(userId: string): Promise<ResponseUserDto> {
    return this.usersRepository.findOne(userId);
  }

  update(userId: string, updateUserDto: UpdateUserDto): Promise<ResponseUserDto> {
    return this.usersRepository.update(userId, updateUserDto);
  }

  remove(userId: string): Promise<ResponseUserDto> {
    return this.usersRepository.remove(userId);
  }
  
  async createTransaction(senderId: string, receiverId: string, amount: number) {
    const {amount} = amount;
    console.log(amount)
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
