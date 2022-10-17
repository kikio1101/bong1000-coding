import { AxiosError, AxiosInstance } from "axios";
import { ClothingType } from "../common/type";

class ProductClient {
  productClient;
  constructor(httpClient: AxiosInstance) {
    this.productClient = httpClient;
  }
  async getProducts() {
    try {
      const response = await this.productClient.get("products");
      if (response.data.success) {
        return response.data;
      }
    } catch (error) {
      const err = error as AxiosError;
      throw new Error(err.message);
    }
  }

  async addProducts(
    name: string,
    type: ClothingType,
    price: number,
    color: string
  ) {
    try {
      const response = await this.productClient.post("products", {
        name,
        type,
        price,
        color,
      });
      if (response.data.success) {
        return response.data;
      }
    } catch (error) {
      const err = error as AxiosError;
      throw new Error(err.message);
    }
  }
}

export default ProductClient;
