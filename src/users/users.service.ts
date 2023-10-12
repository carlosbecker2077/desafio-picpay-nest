import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { IUsersRepository } from 'src/infra/repositories/interfaces/IUserRepository';
import { UserHelper } from './helpers/UserHelper';

@Injectable()
export class UsersService {
  constructor(
    @Inject(IUsersRepository)
    private readonly usersRepository: IUsersRepository,
    @Inject(UserHelper) private readonly userHelper: UserHelper,
  ) { }
  async create(createUserDto: CreateUserDto) {
    const data = await this.userHelper.userObjectBuilder(createUserDto);
    return this.usersRepository.create(data);
  }

  findAll() {
    return this.usersRepository.findAll();
  }

  findOne(userId: string) {
    return this.usersRepository.findOne(userId);
  }

  update(userId: string, updateUserDto: UpdateUserDto) {
    return this.usersRepository.update(userId, updateUserDto);
  }

  remove(userId: string) {
    return this.usersRepository.remove(userId);
  }

}
