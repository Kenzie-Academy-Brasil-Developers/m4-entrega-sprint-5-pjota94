import AppDataSource from "../../data-source";
import User from "../../entities/user.entity";
import { IUserUpdate } from "../../interfaces/users";
import { hash } from "bcrypt";

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
    throw new Error("User Not Found!");
  }

  await userRepository.update(id, {
    name: name ? name : findUser.name,
    email: email ? email : findUser.email,
    password: password ? await hash(password, 10) : findUser.password,
  });

  if (idBody !== undefined && findUser.id) {
    throw new Error("can't change id");
  }
  if (admBody !== undefined) {
    throw new Error("can't change isAdm");
  }
  if (activeBody !== undefined) {
    throw new Error("can't change activeBody");
  }

  const user = await userRepository.findOneBy({ id });

  return user!;
};

export default updateUserService;
