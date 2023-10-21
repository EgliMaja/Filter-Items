import { AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ProductListModel } from "../../../models/product-list.model";
import { ProductListService } from "../../../services/product-list.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Subject, takeUntil } from "rxjs";
import { CategoryFilterItemsService } from "../../../services/category-filter-items.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent implements OnInit , AfterViewInit , OnDestroy{

  @Input() selectedOptionSorting: string = '';
  productList: ProductListModel[] = [];
  selectedOptionCategory: string[] = [];
  page: number = 1;
  productPerPage: number = 6;
  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private productService: ProductListService,
    private  _snackBar: MatSnackBar,
    private categoriesService: CategoryFilterItemsService,
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  ngAfterViewInit() {
    this.getSelectedOptionToFilter();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  getProducts(){
    this.productService.getAllProductList().pipe(
      takeUntil(this.destroy$.asObservable())
    ).subscribe({
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

  getSelectedOptionToFilter(){
    this.categoriesService.selectedCategories$.pipe(takeUntil(this.destroy$.asObservable())).subscribe(( categories: string[] )=> {
      this.selectedOptionCategory = categories;
      // this.filterByCategory();
    })
  }

  filterByCategory(){
    if ( !this.productList || !this.selectedOptionCategory || this.selectedOptionCategory.length === 0 ) {
      return this.productList ;
    }

    return this.productList .filter(product => this.selectedOptionCategory.includes(product.category));
  }

}
