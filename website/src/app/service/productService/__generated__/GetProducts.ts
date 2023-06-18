/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetProducts
// ====================================================

export interface GetProducts_products {
  __typename: "Product";
  id: string;
  name: string;
  monthlyPrice: number;
}

export interface GetProducts {
  products: GetProducts_products[];
}
