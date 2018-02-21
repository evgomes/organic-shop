import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { OrdersListComponent } from 'shared/components/orders-list/orders-list.component';
import { ProductCardComponent } from 'shared/components/product-card/product-card.component';
import { ProductQuantityComponent } from 'shared/components/product-quantity/product-quantity.component';
import { AuthGuard } from 'shared/services/auth-guard.service';
import { AuthService } from 'shared/services/auth.service';
import { CategoryService } from 'shared/services/category.service';
import { OrderService } from 'shared/services/order.service';
import { ProductService } from 'shared/services/product.service';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { UserService } from 'shared/services/user.service';
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { RouterModule } from '@angular/router';
import { DataTableModule } from 'angular5-data-table';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    DataTableModule,
    NgbModule.forRoot(),
    RouterModule.forChild([
      { path: 'order-details/:id', component: OrderDetailsComponent },
    ])
  ],
  declarations: [
    ProductCardComponent,
    ProductQuantityComponent,
    OrdersListComponent,
    OrderSummaryComponent,
    OrderDetailsComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    DataTableModule,
    NgbModule.forRoot().ngModule,
    ProductCardComponent,
    ProductQuantityComponent,
    OrdersListComponent,
    OrderSummaryComponent,
    OrderDetailsComponent
  ],
  providers: [
    AuthService,
    AuthGuard,
    UserService,
    CategoryService,
    ProductService,
    ShoppingCartService,
    OrderService
  ]
})
export class SharedModule { }
