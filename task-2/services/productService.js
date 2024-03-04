import axios from "axios";

const API_BASE_URL = "https://example-api.com";

export async function fetchProductsApi() {
  try {
    const response = await axios.get(`${API_BASE_URL}/products`);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching products: ${error}`);
  }
}

export async function fetchAddressesApi() {
  try {
    const response = await axios.get(`${API_BASE_URL}/addresses`);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching addresses: ${error}`);
  }
}
