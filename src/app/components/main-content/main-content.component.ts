import { Component, OnInit } from '@angular/core';
import { ProductListModel } from "../../models/product-list.model";
import { ProductListService } from "../../services/product-list.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  productList!: ProductListModel[];
  featuredProduct!:boolean;

  constructor(
    private productService: ProductListService,
    private  _snackBar: MatSnackBar,
    ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.productService.getAllProductList().subscribe({
      next:(res)=>{
        this.productList = res;
        this.featuredProduct = res[0].featured;
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
      },

    })
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

}
