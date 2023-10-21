import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-photography',
  templateUrl: './photography.component.html',
  styleUrls: ['./photography.component.scss']
})

export class PhotographyComponent implements OnInit {

  @Output() selectedOption: EventEmitter<string> = new EventEmitter<string>();
  selectedOptionCategory: string = '';
  @Input() set selectedCategoryOption(value:string){
    this.selectedOptionCategory = value;
  }
  selectForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.filterForm();
    this.selectedOption.emit(this.selectedOptionCategory);
  }

  filterForm(){
    this.selectForm = this.formBuilder.group({
      selectSortingOption: [''],
    })
  }


}
