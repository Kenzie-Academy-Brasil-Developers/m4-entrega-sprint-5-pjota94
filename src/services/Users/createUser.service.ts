import AppDataSource from "../../data-source";
import User from "../../entities/user.entity";
import { IUserRequest } from "../../interfaces/users";
import { hash } from "bcrypt";
import AppError from "../../errors/appError";

const createUserService = async ({
  name,
  email,
  isAdm,
  password,
}: IUserRequest): Promise<User> => {
  const userRepository = AppDataSource.getRepository(User);

  const hashedPassword = await hash(password, 10);

  const newUser = userRepository.create({
    name,
    email,
    password: hashedPassword,
    isAdm,
  });

  await userRepository.save(newUser);

  return newUser;
};

export default createUserService;
