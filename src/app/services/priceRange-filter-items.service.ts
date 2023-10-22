import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { DataCheckboxes} from "../models/price-range-filter.model";
import * as itemCheckboxes from '../../data/filter-rangePrice-items.json';

@Injectable({
  providedIn: 'root'
})

export class PriceRangeFilterItemsService {

  importMenuData = JSON.stringify(itemCheckboxes);
  menuData : DataCheckboxes;
  protected selectedRange = new BehaviorSubject<string[]>([]);
  selectedRange$ = this.selectedRange.asObservable();

  constructor() {
    this.menuData = JSON.parse(this.importMenuData);
  }

  getItemCheckboxes():Observable<DataCheckboxes>{
    return of(this.menuData);
  }

  selectRange(range: string[]) {
    this.selectedRange.next(range);
  }

}
