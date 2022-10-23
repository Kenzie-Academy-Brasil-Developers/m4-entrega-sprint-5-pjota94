import AppDataSource from "../../data-source";
import Address from "../../entities/addresses.entity";
import AppError from "../../errors/appError";
import { IAddressRequest } from "../../interfaces/properties";

const createAddressesService = async ({
  district,
  zipCode,
  city,
  state,
  number,
}: IAddressRequest) => {
  if (zipCode.length > 8) {
    throw new AppError("invalid zip code");
  }

  if (state.length > 2) {
    throw new AppError("invalid state");
  }

  const addressRepository = AppDataSource.getRepository(Address);

  const addressAlreadyExist = await addressRepository.findOneBy({
    district,
    city,
    number,
    state,
    zipCode,
  });

  if (addressAlreadyExist) {
    throw new AppError("address already exists");
  }

  const address = addressRepository.create({
    district,
    zipCode,
    city,
    state,
    number,
  });

  await addressRepository.save(address);

  return address;
};

export default createAddressesService;
