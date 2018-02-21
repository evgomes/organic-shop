import { Component, OnDestroy, OnInit } from "@angular/core";
import { Order } from "shared/models/order";
import { Subscription } from "rxjs/Subscription";
import { OrderService } from "shared/services/order.service";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent implements OnInit {
  orders$: Observable<Order[]>;

  constructor(private orderService: OrderService) { }

  async ngOnInit() {
    this.orders$ = await this.orderService.getOrders();
  }

}
