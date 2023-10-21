import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import { ProductListModel } from "../models/product-list.model";

@Injectable({
  providedIn: 'root'
})

export class ProductListService {

  private readonly api: string;
  private readonly myProductApi: string;
  private savedProducts: ProductListModel[] = [];
  private savedProductSubject = new BehaviorSubject<ProductListModel[]>(this.savedProducts);
  savedProductSubject$ = this.savedProductSubject.asObservable();

  constructor(
    private http: HttpClient
  ) {
    this.api = environment.api + 'products';
    this.myProductApi = environment.api + 'productCard';
  }

  /* Get All Product List */
  getAllProductList(): Observable<ProductListModel[]>{
    return this.http.get<ProductListModel[]>(`${this.api}`)
  }

  /* Add a product to card */
  saveProductToCard(product: Omit<ProductListModel , 'id'>): Observable<ProductListModel>{
    return this.http.post<ProductListModel>(`${this.myProductApi}`,product);
  }

  /* Get Saved Product */
  getSavedProduct():Observable<ProductListModel[]>{
    return  this.http.get<ProductListModel[]>(`${this.myProductApi}`);
  }

  /* Delete product */
  removeProduct(id: number): Observable<ProductListModel[]> {
    return this.http.delete<ProductListModel[]>((this.myProductApi)+'/'+id);
  }

  /* Send Saved Product to Card */
  sendProductToCard(product: ProductListModel[]){
    this.savedProductSubject.next(product);
  }
}
