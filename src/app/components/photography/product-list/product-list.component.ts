import { Component, OnInit } from '@angular/core';
import { ProductListModel } from "../../../models/product-list.model";
import { ProductListService } from "../../../services/product-list.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent implements OnInit {

  productList!: ProductListModel[];

  constructor(
    private productService: ProductListService
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.productService.getAllProductList().subscribe({
      next:(res)=>{
        this.productList = res;
        console.log(this.productList , 'Products')
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

}
