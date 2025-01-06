import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductModel } from '../app/models/product-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url = 'http://localhost:3000/registrations';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(this.url);
  }

  addProduct(reg: ProductModel): Observable<ProductModel> {
    return this.http.post<ProductModel>(this.url, reg);
  }

  modifyProduct(reg: ProductModel): Observable<ProductModel> {
    return this.http.put<ProductModel>(`${this.url}/${reg.id}`, reg);
  }

  deleteProduct(reg: ProductModel): Observable<ProductModel> {
    return this.http.delete<ProductModel>(`${this.url}/${reg.id}`);
  }
}
