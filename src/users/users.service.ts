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

}
