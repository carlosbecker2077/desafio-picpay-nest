import { HttpException, Inject, Injectable } from '@nestjs/common';
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
    const userMailExists = await this.usersRepository.findOneEmail(createUserDto.email);
    if (userMailExists) {
      throw new HttpException(`Email already registred`, 400);
    }

    const userDocumentExists = await this.usersRepository.findOneDocument(createUserDto.document);
    if (userDocumentExists) {
      throw new HttpException(`Document already registred`, 400);
    }

    const data = await this.userHelper.userObjectBuilder(createUserDto);
    return await this.usersRepository.create(data);
  }

  async findAll(): Promise<ResponseUserDto[]> {
    return this.usersRepository.findAll();
  }

  async findOne(userId: string): Promise<ResponseUserDto> {
    return this.usersRepository.findOne(userId);
  }

  async update(userId: string, updateUserDto: UpdateUserDto): Promise<ResponseUserDto> {
    const userMailExists = await this.usersRepository.findOneEmail(updateUserDto.email);
    if (userMailExists) {
      throw new HttpException(`Email already registred`, 400);
    }

    const userDocumentExists = await this.usersRepository.findOneDocument(updateUserDto.document);
    if (userDocumentExists) {
      throw new HttpException(`Document already registred`, 400);
    }
    return this.usersRepository.update(userId, updateUserDto);
  }

  async remove(userId: string): Promise<ResponseUserDto> {
    return this.usersRepository.remove(userId);
  }
}
