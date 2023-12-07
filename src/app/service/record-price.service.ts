import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Observable } from 'rxjs'

import { recordPrice } from '../interfaces/recordPrice'

@Injectable({
  providedIn: 'root'
})
export class RecordPriceService {
  BASE_URL: string = 'http://localhost:3200';
  constructor(private http: HttpClient) { }

  createProduct(recordPrice: recordPrice): Observable<recordPrice>{
    return this.http.post<recordPrice>(`${this.BASE_URL}/materials`, recordPrice)
  }
}
