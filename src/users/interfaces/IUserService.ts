import { CreateUserDto } from "../dto/create-user.dto";
import { ResponseUserDto } from "../dto/response-user.dto";
import { UpdateUserDto } from "../dto/update-user.dto";

export interface IUsersService {
  create(createUserDto: CreateUserDto): Promise<ResponseUserDto>;
  findAll(): Promise<ResponseUserDto[]>;
  findOne(userId: string): Promise<ResponseUserDto>;
  update(userId: string, userUpdateDto: UpdateUserDto): Promise<ResponseUserDto>;
  remove(userId: string): Promise<ResponseUserDto>;
}

export const IUsersService = Symbol("IUsersService");
