import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.page.html',
  styleUrls: ['./product-create.page.scss'],
})
export class ProductCreatePage {
  product: any = {
    name: '',
    price: ''
  };

  constructor(private productService: ProductService, private router: Router) {}

  createProduct() {
    this.productService.createProduct(this.product).subscribe(() => {
      this.router.navigateByUrl('/product-list');
    });
  }
}
