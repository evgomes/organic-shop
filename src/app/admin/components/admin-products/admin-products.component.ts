import { Component, OnDestroy, OnInit } from "@angular/core";
import { Product } from "shared/models/product";
import { Subscription } from "rxjs/Subscription";
import { Router } from "@angular/router";
import { ProductService } from "shared/services/product.service";
import { DataTableResource } from "angular5-data-table";

@Component({
  selector: 'admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  subscription: Subscription;

  tableResource: DataTableResource<Product>;
  items: Product[] = [];
  itemCount: number;

  constructor(private router: Router, private productService: ProductService) {
  }

  ngOnInit() {
    this.subscription = this.productService.getAll().subscribe(products => {
      this.products = products;
      this.initializeTable(products);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  initializeTable(products: Product[]) {
    this.tableResource = new DataTableResource(products);
    this.tableResource.query({ offset: 0, limit: 10 }).then(items => this.items = items);
    this.tableResource.count().then(count => this.itemCount = count);
  }

  reloadItems(params) {
    if (!this.tableResource)
      return;

    this.tableResource.query(params).then(items => this.items = items);
  }

  filter(query) {
    let filteredProducts = (query)
      ? this.products.filter(p => p.title.toLowerCase().includes(query.toLowerCase()))
      : this.products;

    this.initializeTable(filteredProducts);
  }

  navigate(productId) {
    this.router.navigate(['/admin/products/', productId]);
  }
}
