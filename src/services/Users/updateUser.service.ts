import AppDataSource from "../../data-source";
import User from "../../entities/user.entity";
import { IUserUpdate } from "../../interfaces/users";
import { hash } from "bcrypt";
import AppError from "../../errors/appError";

const updateUserService = async (
  { name, email, password }: IUserUpdate,
  id: string,
  idBody: string,
  admBody: boolean,
  activeBody: boolean
): Promise<User> => {
  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOneBy({ id });

  if (!findUser) {
    throw new AppError("User Not Found!", 404);
  }

  await userRepository.update(id, {
    name: name ? name : findUser.name,
    email: email ? email : findUser.email,
    password: password ? await hash(password, 10) : findUser.password,
  });

  if (idBody !== undefined && findUser.id) {
    throw new AppError("can't change id", 401);
  }
  if (admBody !== undefined) {
    throw new AppError("can't change isAdm", 401);
  }
  if (activeBody !== undefined) {
    throw new AppError("can't change activeBody", 401);
  }

  const user = await userRepository.findOneBy({ id });

  return user!;
};

export default updateUserService;
