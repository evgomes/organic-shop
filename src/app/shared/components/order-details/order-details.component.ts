import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Order } from 'shared/models/order';
import { OrderService } from 'shared/services/order.service';

@Component({
  selector: 'order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit, OnDestroy {
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
