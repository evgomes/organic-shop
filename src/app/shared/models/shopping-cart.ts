import { Product } from './product';
import { ShoppingCartItem } from "./shopping-cart-item";

export class ShoppingCart {
  public items: ShoppingCartItem[] = [];

  constructor(private itemsMap: { [productId: string]: ShoppingCartItem }) {
    this.itemsMap = itemsMap || {};

    for (let productId in itemsMap) {
      let item = itemsMap[productId];
      this.items.push(new ShoppingCartItem({ key: productId, ...item }));
    }
  }

  get totalItemsCount() {
    return this.items.reduce((total, item) => total += item.quantity, 0);
  }

  get totalPrice() {
    return this.items.reduce((total, item) => total += item.totalPrice, 0);
  }

  getQuantity(product: Product) {
    let item = this.itemsMap[product.key];
    return item ? item.quantity : 0;
  }
}
