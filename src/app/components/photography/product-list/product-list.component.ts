import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { ProductListModel } from "../../../models/product-list.model";
import { ProductListService } from "../../../services/product-list.service";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent implements OnInit {

  productList!: ProductListModel[];

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
