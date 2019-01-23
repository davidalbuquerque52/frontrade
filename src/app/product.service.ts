import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    headers.append('Authorization', 'No ');

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productUrl = 'http://localhost:8080/product';

  constructor(private http: HttpClient) { }

  toList() {
    return this.http.get<any[]>(`${this.productUrl}`, {headers: headers});
  }
}
