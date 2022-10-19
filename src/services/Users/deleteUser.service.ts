import AppDataSource from "../../data-source";
import User from "../../entities/user.entity";

const deleteUserService = async (id: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const allUsers = await userRepository.find();
  const compareId = allUsers.find((elem) => elem.id === id);

  if (!compareId) {
    return null;
  }

  const findUser: any = await userRepository.findOneBy({ id });

  if (findUser.isActive === false) {
    throw new Error("User already deleted");
  }

  await AppDataSource.createQueryBuilder()
    .update(User)
    .set({ isActive: false })
    .where({ id })
    .execute();

  const message = { message: "User deleted with success" };

  return message;
};

export default deleteUserService;
