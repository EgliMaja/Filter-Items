import { Component, OnInit } from '@angular/core';
import { PriceRangeFilterItemsService } from "../../../services/priceRange-filter-items.service";
import { PriceRangeFilterModel } from "../../../models/price-range-filter.model";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-filter-price-range',
  templateUrl: './filter-price-range.component.html',
  styleUrls: ['./filter-price-range.component.scss'],
})

export class FilterPriceRangeComponent implements OnInit {

  priceRanges!: PriceRangeFilterModel[];
  formGroup!: FormGroup;
  selectedRanges: string[] = [];

  constructor(
    private service: PriceRangeFilterItemsService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.getItemOfPiceRangeCheckboxes();
    this.initializeCheckboxesForm();
  }

  getItemOfPiceRangeCheckboxes(){
    this.service.getItemCheckboxes().subscribe({
      next:(res) =>{
        this.priceRanges = res.items;
      }
    })
  }

  initializeCheckboxesForm(){
    this.formGroup = this.formBuilder.group({
      range: ['']
    })
  }

  onChecboxValueChange(range: string){
    if (this.selectedRanges.includes(range)){
      this.selectedRanges = this.selectedRanges.filter(item => item !== range);
    } else {
      this.selectedRanges.push(range)
    }
    this.service.selectRange(this.selectedRanges);
  }

}
