import { GET_ALL_PRODUCTS } from "./queries";
import { apolloClient } from "./../../graphql";
import { GetProducts_products } from "./__generated__/GetProducts";

class ProductService {
  public async GetProducts(): Promise<GetProducts_products[]> {
    const response = await apolloClient
      .query({ query: GET_ALL_PRODUCTS })
      .catch((err) => {
        throw err;
      });

    if (response && response.data && response.data.cars)
      return response.data.cars as GetProducts_products[];

    return [];
  }
}

export default new ProductService();
