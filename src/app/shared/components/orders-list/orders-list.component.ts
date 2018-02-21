import { Order } from 'shared/models/order';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DataTableResource } from 'angular5-data-table';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit {
  @Input("orders") orders: Order[] = [];
  subscription: Subscription;
  
  tableResource: DataTableResource<Order>;
  items: Order[] = [];
  itemCount: number;
  
  constructor(private router: Router) {}

  ngOnInit() {
      this.initializeTable(this.orders);
  }

  initializeTable(orders: Order[]) {
    this.tableResource = new DataTableResource(orders);
    this.tableResource.query({ offset: 0, limit: 10 }).then(items => this.items = items);
    this.tableResource.count().then(count => this.itemCount = count);
  }

  reloadItems(params) {
    if (!this.tableResource)
      return;

    this.tableResource.query(params).then(items => this.items = items);
  }

  filter(query) {
    let filteredOrders = (query)
      ? this.orders.filter(p => p.shipping.name.toLowerCase().includes(query.toLowerCase()))
      : this.orders;

    this.initializeTable(filteredOrders);
  }

  navigate(orderId) {
    this.router.navigate(['/order-details/', orderId]);
  }
}
