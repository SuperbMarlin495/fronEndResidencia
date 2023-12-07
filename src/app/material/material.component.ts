import { Component, OnInit } from '@angular/core';

import { ProductService } from '../service/product.service';
import { product } from '../../app/interfaces/product';

import { Router, ActivatedRoute } from '@angular/router'
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private router: Router,
    private activateRouter: ActivatedRoute
    ){}
    edit: boolean = false;
  ngOnInit(){
   const parametro = this.activateRouter.snapshot.params;
   console.log(parametro)
   if(parametro){
      this.productService.getProduct(parametro['id']).subscribe(
        res => {
          console.log(res);
          this.product = res;
          this.edit = true;
        }
      )
   }
  }

  getProducts(){
    this.productService.getProducts().subscribe(
      res => {
        console.log(res);
      },
      err => console.log(err)
    )
  }

  product: product  ={
    id_product: 0,
    name_product: '',
    description: '',
    unit_measurement: '',
    packing: false,
    precioPza: 0,
    imgProduct: ''
  };

  submitProduct(){
    this.productService.createProduct(this.product)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/']);
      },
      err => console.log(err)
    )
  }

  editProduct(){
    console.log(this.product);
    this.productService.updateProdcut(this.product.id_product, this.product).subscribe(
      res => {
        alert('Actulizacion Correcta');
        this.router.navigate(['/productList'])
      },
      err =>{

      }
    )
  }

}
