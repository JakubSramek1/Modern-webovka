import { GET_ALL_CARS } from "./queries";
import { apolloClient } from "./../../graphql";
import { GetProducts_products } from "./__generated__/GetProducts";

class CarService {
  public async GetProducts(): Promise<GetProducts_products[]> {
    const response = await apolloClient
      .query({ query: GET_ALL_CARS })
      .catch((err) => {
        throw err;
      });

    if (response && response.data && response.data.cars)
      return response.data.cars as GetProducts_products[];

    return [];
  }
}

export default new CarService();
