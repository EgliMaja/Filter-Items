import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class CategoryFilterItemsService {
  protected selectedCategories = new BehaviorSubject<string[]>([]);
  selectedCategories$ = this.selectedCategories.asObservable();

  selectCategories(categories: string[]) {
    this.selectedCategories.next(categories);
  }
}
