import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ProductListModel } from "../models/product-list.model";

@Injectable({
  providedIn: 'root'
})

export class ProductListService {

  private readonly api: string;

  constructor(
    private http: HttpClient
  ) {
    this.api = environment.api + 'products';
  }

  /* Get All Product List */
  getAllProductList(): Observable<ProductListModel[]>{
    return this.http.get<ProductListModel[]>(`${this.api}`)
  }



}
