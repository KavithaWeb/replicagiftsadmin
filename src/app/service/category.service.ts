import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  _options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  baseUrl = "https://replicagiftsbackend.onrender.com"
  // baseUrl = "http://localhost:3000"


  addProduct(data: any) {

    const formData = new FormData();

    formData.append("categoryName", data.categoryName);

    formData.append("thumbnail", data.thumbnail);
    formData.append("frame", data.frame);

    const token: string | null = sessionStorage.getItem('admin');
    let _options = { headers: new HttpHeaders({ 'Authorization': `Bearer ${token ? JSON.parse(token).token : ""}` }) };


    return this.http.post(this.baseUrl + "/api/category/add-category", formData, _options)


  }

  getCategory() {
    return this.http.get(this.baseUrl + "/api/category/all")
  }

  getCategoryOnly() {
    return this.http.get(this.baseUrl + "/api/category/category-only")

  }
  getprintType() {
    return this.http.get(this.baseUrl + "/api/category/printType")

  }

  getcategoryById(category: any) {
    return this.http.get(this.baseUrl + "/api/products/category/" + category);
  }

  addPrintType(data: any) {
    const formData = new FormData();

    formData.append("categoryName", data.categoryName);

    formData.append("thumbnail", data.thumbnail);

    const token: string | null = sessionStorage.getItem('admin');
    let _options = { headers: new HttpHeaders({ 'Authorization': `Bearer ${token ? JSON.parse(token).token : ""}` }) };


    return this.http.post(this.baseUrl + "/api/category/printType", formData, _options)
  }



  update(data: any, id: any) {
    const formData = new FormData();

    formData.append("categoryName", data.categoryName);
    console.log(data.categoryName);

    formData.append("thumbnail", data.thumbnail);
    formData.append("frame", data.frame);


    const token: string | null = sessionStorage.getItem('admin');
    let _options = { headers: new HttpHeaders({ 'Authorization': `Bearer ${token ? JSON.parse(token).token : ""}` }) };


    return this.http.put(this.baseUrl + "/api/category/update/" + id, formData, _options)
  }

  delete(id: any) {
    const token: string | null = sessionStorage.getItem('admin');
    let _options = { headers: new HttpHeaders({ 'Authorization': `Bearer ${token ? JSON.parse(token).token : ""}` }) };


    return this.http.delete(this.baseUrl + "/api/category/delete/" + id, _options)
  }

}
