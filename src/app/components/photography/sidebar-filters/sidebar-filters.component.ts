import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import {CategoryFilterItemsService} from "../../../services/category-filter-items.service";

@Component({
  selector: 'app-sidebar-filters',
  templateUrl: './sidebar-filters.component.html',
  styleUrls: ['./sidebar-filters.component.scss']
})

export class SidebarFiltersComponent implements OnInit {

  formGroup!:FormGroup;

  constructor(
      private  categoryFilterService: CategoryFilterItemsService,
      public dialog: MatDialog,
      ) { }

  ngOnInit(): void {
  }


  clearCheckedValues(){
    this.categoryFilterService.triggerFormReset();
  }

  closeDialog(){
    this.dialog.closeAll();
  }


}
