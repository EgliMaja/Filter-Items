import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import { ProductListModel } from "../../../models/product-list.model";
import { ProductListService } from "../../../services/product-list.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import {Subject} from "rxjs";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent implements OnInit , OnDestroy{

  productList!: ProductListModel[];
  page: number = 1;
  productPerPage: number = 6;
  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private productService: ProductListService,
    private  _snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  ngOnDestroy() {
  }

  getProducts(){
    this.productService.getAllProductList().subscribe({
      next:(res)=>{
        this.productList = res;
      },
      error:(err)=>{
        this.openSnackBar( JSON.stringify(err.status) , "Close");
      }
    })
  }


  saveProductToCard(product: ProductListModel){
    this.productService.saveProductToCard(product).subscribe({
      next:(res)=>{
        this.openSnackBar( JSON.stringify(res) , "Close");
      },
      error:(err) =>{
        this.openSnackBar( JSON.stringify(err.status) , "Close");
      }
    })
  }



  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }


}
