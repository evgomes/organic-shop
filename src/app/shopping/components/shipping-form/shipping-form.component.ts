import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Order } from 'shared/models/order';
import { Shipping } from 'shared/models/shipping';
import { ShoppingCart } from 'shared/models/shopping-cart';
import { AuthService } from 'shared/services/auth.service';
import { OrderService } from 'shared/services/order.service';

@Component({
  selector: 'shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent implements OnInit, OnDestroy {
  @Input('shopping-cart') shoppingCart: ShoppingCart;

  shipping: Shipping = new Shipping();
  userSubscription: Subscription;
  userId: string;

  constructor(private router: Router, private authService: AuthService, private orderService: OrderService) {
  }

  ngOnInit() {
    this.userSubscription = this.authService.appUser$.subscribe(user => this.userId = user.uid);
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  async placeOrder() {
    let order = new Order(this.userId, this.shipping, this.shoppingCart);
    let result = await this.orderService.placeOrder(order);
    this.router.navigate(['/order-success', result.key]);
  }

}
