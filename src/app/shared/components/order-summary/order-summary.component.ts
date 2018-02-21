import { Component, Input } from '@angular/core';
import { Order } from 'shared/models/order';

@Component({
  selector: 'order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent {
  @Input('order') order: Order;
}
