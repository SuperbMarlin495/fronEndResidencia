import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Observable } from 'rxjs'

import { product } from '../interfaces/product'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  BASE_URL: string = 'http://localhost:3200';
  constructor(private http: HttpClient) { }

  getProducts(): Observable<product[]>{
    return this.http.get<product[]>(`${this.BASE_URL}/materials`);
  }
  getProduct(id: number): Observable<product>{
    return this.http.get<product>(`${this.BASE_URL}/materials/${id}`)
  }
  createProduct(product: product): Observable<product>{
    return this.http.post<product>(`${this.BASE_URL}/materials`, product)
  }
  deleteProduct(id: number){
    return this.http.delete(`${this.BASE_URL}/materials/${id}`)
  }
  updateProdcut(id: number, product: product): Observable<product>{
    return this.http.patch<product>(`${this.BASE_URL}/materials/${id}`, product)
  }
}
