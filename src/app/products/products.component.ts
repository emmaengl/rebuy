import { Component, Input, OnInit } from '@angular/core';

import { Product } from './product';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  providers: [ProductsService],
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
  @Input() loggedIn = false;
  products: Product[] = [];
  
  constructor(
    private productsService: ProductsService) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.productsService.getProducts()
      .subscribe(products => {
        return this.products = products
      });
  }

  onSelect(term: string): void {
    // no endpoint to sort by rating so we'll sort by options we do have for now
    this.productsService.sortProducts(term).subscribe(products => {
      return this.products = products
    });
  }
}
