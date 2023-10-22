import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { FilterCategoryComponent } from "./product-list/filter-category/filter-category.component";
import { CategoryFilterItemsService } from "../../services/category-filter-items.service";
import {SidebarFiltersComponent} from "./sidebar-filters/sidebar-filters.component";

@Component({
  selector: 'app-photography',
  templateUrl: './photography.component.html',
  styleUrls: ['./photography.component.scss']
})

export class PhotographyComponent implements OnInit {

  selectForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private categoryFilterService: CategoryFilterItemsService,
  ) { }

  ngOnInit(): void {
    this.filterForm();
  }

  filterForm(){
    this.selectForm = this.formBuilder.group({
      selectSortingOption: [''],
    })
  }

  openFilterComponents(){
    this.categoryFilterService.openDialog(SidebarFiltersComponent);
  }


}
