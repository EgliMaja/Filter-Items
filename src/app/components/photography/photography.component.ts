import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { FilterCategoryComponent } from "./filter-category/filter-category.component";
import {CategoryFilterItemsService} from "../../services/category-filter-items.service";

@Component({
  selector: 'app-photography',
  templateUrl: './photography.component.html',
  styleUrls: ['./photography.component.scss']
})

export class PhotographyComponent implements OnInit {

  selectForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dialog: MatDialog,
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
    this.categoryFilterService.openDialog(FilterCategoryComponent)
  }


}
