import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Component, OnInit } from "@angular/core";
import { Order } from "shared/models/order";
import { Observable } from "rxjs/Observable";
import { ActivatedRoute } from "@angular/router";
import { OrderService } from "shared/services/order.service";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'order-success',
  templateUrl: './order-success.component.html',
  styleUrls: ['./order-success.component.css']
})
export class OrderSuccessComponent implements OnInit, OnDestroy  {
  order: Order;
  subscription: Subscription;
  
  constructor(private route: ActivatedRoute, private orderService: OrderService) { }

  async ngOnInit() {
    let order$ =  await this.route.params.switchMap(key => this.orderService.getOrder(key.id));
    this.subscription = order$.subscribe(order => this.order = order);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
