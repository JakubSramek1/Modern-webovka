import { gql } from "@apollo/client";

export const GET_ALL_PRODUCTS = gql`
  query GetProducts {
    cars {
      id
      name
      monthlyPrice
      dailyPrice
      gearType
      gas
      mileage
      thumbnailUrl
    }
  }
`;
