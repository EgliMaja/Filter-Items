import { Component, OnInit } from '@angular/core';
import { ProductListService } from "../../services/product-list.service";
import { ProductListModel } from "../../models/product-list.model";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-navbar',
  templateUrl:'./navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})

export class NavbarComponent implements OnInit {

  productList!: ProductListModel[];

  constructor(
      private productsService: ProductListService ,
      private  _snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.getSavedProducts();
  }

  getSavedProducts(){
    this.productsService.getSavedProduct().subscribe({
      next:(res)=> {
        this.productList = res;
      },
      error:(err) => {
        this.openSnackBar( JSON.stringify(err.status) , "Close");
      }
    })
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  removeProduct(){
    this.productsService.removeProduct(this.productList[0].id as number).subscribe({
      next:(res)=> {
        this.openSnackBar( JSON.stringify(res) , "Close");
      },
      error:(err) => {
        this.openSnackBar( JSON.stringify(err.status) , "Close");
      },
      complete:()=> {
        this.getSavedProducts();
      }
    })
  }

}
