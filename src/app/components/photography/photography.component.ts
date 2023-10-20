import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-photography',
  templateUrl: './photography.component.html',
  styleUrls: ['./photography.component.scss']
})

export class PhotographyComponent implements OnInit {

  selectForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.filterForm();
  }

  filterForm(){
    this.selectForm = this.formBuilder.group({
      selectSortingOption: [''],
    })
  }

}
