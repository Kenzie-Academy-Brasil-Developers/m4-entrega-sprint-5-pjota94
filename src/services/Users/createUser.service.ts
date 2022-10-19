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
  // const users = await userRepository.find();

  // const emailAlreadyExist = users.find((user) => user.email == email);

  // if (emailAlreadyExist) {
  //   throw new AppError("Email Already Exist");
  // }

  // if (!name) {
  //   throw new AppError("name if missing");
  // }

  // if (!email) {
  //   throw new AppError("email if missing");
  // }

  // if (!isAdm) {
  //   throw new AppError("isAdm if missing");
  // }

  // if (!password) {
  //   throw new AppError("password if missing");
  // }

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
