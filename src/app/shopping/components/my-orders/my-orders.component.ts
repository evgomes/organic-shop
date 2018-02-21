import { Component, OnInit, OnDestroy } from "@angular/core";
import { Order } from "shared/models/order";
import { Subscription } from "rxjs/Subscription";
import { AuthService } from "shared/services/auth.service";
import { OrderService } from "shared/services/order.service";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {
  orders$: Observable<Order[]>;

  constructor(private authService: AuthService, private orderService: OrderService) { }

  async ngOnInit() {
    this.orders$ = await this.authService.appUser$.switchMap(user => this.orderService.getOrdersByUser(user.uid));
  }
}
