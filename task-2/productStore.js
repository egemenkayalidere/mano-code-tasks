import { makeObservable, observable, action, runInAction } from "mobx";
import { fetchProductsApi, fetchAddressesApi } from "./services/productService";

class ProductsStore {
  products = [];
  cartItems = [];
  addresses = [];

  constructor() {
    makeObservable(this, {
      products: observable,
      cartItems: observable,
      addresses: observable,
      fetchProducts: action,
      fetchAddresses: action,
      addToCart: action,
      removeFromCart: action,
    });
  }

  async fetchProducts() {
    try {
      const response = await fetchProductsApi();
      runInAction(() => {
        this.products = response.data;
      });
    } catch (error) {
      console.error("Error fetching products: ", error);
    }
  }

  async fetchAddresses() {
    try {
      const response = await fetchAddressesApi();
      runInAction(() => {
        this.addresses = response.data;
      });
    } catch (error) {
      console.error("Error fetching addresses: ", error);
    }
  }

  addToCart(product) {
    this.cartItems.push(product);
  }

  removeFromCart(productId) {
    const index = this.cartItems.findIndex((item) => item.id === productId);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
    }
  }
}

const store = new ProductsStore();
export default store;
