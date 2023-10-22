import {ChangeDetectorRef, Component, Inject, OnDestroy, OnInit} from '@angular/core';
import { Subject, takeUntil } from "rxjs";
import { ProductListService } from "../../../services/product-list.service";
import { ProductListModel } from "../../../models/product-list.model";
import { FormBuilder, FormGroup } from "@angular/forms";
import { CategoryFilterItemsService } from "../../../services/category-filter-items.service";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-filter-category',
  templateUrl: './filter-category.component.html',
  styleUrls: ['./filter-category.component.scss'],
})

export class FilterCategoryComponent implements OnInit ,OnDestroy {

  private destroy$: Subject<boolean> = new Subject<boolean>();
  productList: ProductListModel[] = [];
  categoriesOfProducts: string[] = [];
  formGroup!: FormGroup;
  selectedCategories: string[] = [];

  constructor(
      private productService: ProductListService,
      private categoriesService: CategoryFilterItemsService,
      private formBuilder: FormBuilder,
      private chd: ChangeDetectorRef,
      public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.getProducts();
    this.categoriesForm();
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
        this.categoriesOfProducts = [...new Set(this.productList.map(product => product.category))];
      }
    })
  }

  categoriesForm(){
    this.formGroup = this.formBuilder.group({
      category: ['']
    })
  }


  onCheckboxChangeValue( category: string){
    if (this.selectedCategories.includes(category)) {
      this.selectedCategories = this.selectedCategories.filter(item =>   item !== category && item !== category);
    } else {
      this.selectedCategories.push(category);
    }
    console.log(this.selectedCategories , '...data')
    this.chd.detectChanges();

    this.formGroup.patchValue(this.selectedCategories);
    this.categoriesService.selectCategories(this.selectedCategories);

  }

  clearCheckedValues(){
    this.formGroup.patchValue({
      category: false
    })
  }


  closeDialog(){
    this.dialog.closeAll();
  }


}
