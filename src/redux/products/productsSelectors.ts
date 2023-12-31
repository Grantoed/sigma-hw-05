import { ProductsResponse } from "src/interfaces/productsResponse.interface";
import { RootState } from "../store";

export const selectIsLoading = (state: RootState): boolean =>
  state.products.isLoading;
export const selectProductsObject = (state: RootState): ProductsResponse =>
  state.products.productsObject;
export const selectError = (state: RootState): string => state.products.error;
export const selectProductCount = (state: RootState): number =>
  state.products.productsObject.count;
