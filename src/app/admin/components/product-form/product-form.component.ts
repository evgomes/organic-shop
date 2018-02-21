import { CategoryService } from './../../../shared/services/category.service';
import { ProductService } from "shared/services/product.service";
import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  categories$;
  productId;
  product = { title: "", price: 0, category: "", imageUrl: "" };

  constructor(private productService: ProductService,
              private categoryService: CategoryService,
              private route: ActivatedRoute,
              private router: Router)
  {
    this.categories$ = categoryService.getAll();
    this.productId = route.snapshot.paramMap.get('id');

    if(this.productId) {
      this.productService.get(this.productId).subscribe(p => this.product = p);
    }
  }

  save(product) {
    if(this.productId)
      this.productService.update(this.productId, product);
    else
      this.productService.create(product);

    this.router.navigate(['/admin/products']);
  }

  delete() {
    if(!confirm("Are you sure you want to delete this product?"))
      return;

    this.productService.delete(this.productId);
    this.router.navigate(['/admin/products']);
  }

}
