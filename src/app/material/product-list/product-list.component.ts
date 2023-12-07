import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/interfaces/product';

import { ProductService } from 'src/app/service/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  products: product[] = [];

  constructor(private productService: ProductService){}
  ngOnInit() {
    this.getProducts();
  }

  getProducts(){
    this.productService.getProducts().subscribe(
      res=> {
        this.products = res;
        console.log(res)
      },
      err => {
        
      }
    )
  }

  deleteProduct(id: number){
    this.productService.deleteProduct(id).subscribe(
      res => {
        this.getProducts();
        alert('El item fue eliminado');
      },
      err => {
        console.log(err);
      }
    )
  }
}
