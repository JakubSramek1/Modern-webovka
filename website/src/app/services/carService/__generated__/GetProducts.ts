/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetProducts
// ====================================================

export interface GetProducts_products {
  __typename: "Car";
  id: string;
  name: string;
  monthlyPrice: number;
  dailyPrice: number;
  gearType: string;
  gas: string;
  mileage: string;
  thumbnailUrl: string;
}

export interface GetProducts {
  products: GetProducts_products[];
}
