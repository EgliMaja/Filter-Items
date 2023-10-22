import { Component, OnInit } from '@angular/core';
import { PriceRangeFilterItemsService } from "../../../../services/priceRange-filter-items.service";
import { PriceRangeFilterModel } from "../../../../models/price-range-filter.model";
import { FormBuilder, FormGroup } from "@angular/forms";
import { CategoryFilterItemsService } from "../../../../services/category-filter-items.service";

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
        private categoriesService: CategoryFilterItemsService,
        private formBuilder: FormBuilder,
    ) {
    }

    ngOnInit(): void {
        this.getItemOfPiceRangeCheckboxes();
        this.initializeCheckboxesForm();
    }

    getItemOfPiceRangeCheckboxes() {
        this.service.getItemCheckboxes().subscribe({
            next: (res) => {
                this.priceRanges = res.items;
            }
        })
    }

    initializeCheckboxesForm() {
        this.formGroup = this.formBuilder.group({
            range: ['']
        })
        this.categoriesService.resetForm$.subscribe((shouldReset) => {
            if (shouldReset) {
                this.resetForm();
            }
        });
    }

    onChecboxValueChange(range: string) {
        if (this.selectedRanges.includes(range)) {
            this.selectedRanges = this.selectedRanges.filter(item => item !== range);
        } else {
            this.selectedRanges.push(range)
        }
        this.service.selectRange(this.selectedRanges);
    }

    resetForm() {
        this.formGroup.patchValue({
            range: false
        })
    }

}
