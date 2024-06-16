import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.page.html',
  styleUrls: ['./product-update.page.scss'],
})
export class ProductUpdatePage implements OnInit {
  product: any = {
    name: '',
    price: ''
  };
  id: number | null = null;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    if (this.id !== null) {
      this.productService.getProduct(this.id).subscribe((data) => {
        this.product = data;
      });
    } else {
      console.error('Product ID is null');
    }
  }

  updateProduct() {
    if (this.id !== null) {
      this.productService.updateProduct(this.id, this.product).subscribe(() => {
        this.router.navigateByUrl('/product-list');
      });
    } else {
      console.error('Product ID is null');
    }
  }
}

