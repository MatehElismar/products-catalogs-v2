import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IProduct } from '../interfaces/products.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { 
  }

  getProducts() {
     return this.http.get<IProduct[]>(`${environment.url}/Products`);
  }

  addProduct(data:IProduct){
    return this.http.post<IProduct>(`${environment.url}/Products`,data);
  }
}
