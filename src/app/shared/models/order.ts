import { Shipping } from './shipping';
import { ShoppingCart } from './shopping-cart';

export class Order {
  userId: string;
  datePlaced: number;
  shipping: Shipping;
  totalPrice: number;
  items: any[] = [];


  constructor(userId: string, shipping: Shipping, shoppingCart: ShoppingCart) {
    this.userId = userId;
    this.datePlaced = new Date().getTime();
    this.shipping = shipping;

    this.items = shoppingCart.items.map(i => {
      return {
        product: {
          title: i.title,
          imageUrl: i.imageUrl,
          price: i.price
        },
        quantity: i.quantity,
        totalPrice: i.totalPrice
      }
    });

    this.totalPrice = shoppingCart.totalPrice;
  }
}
