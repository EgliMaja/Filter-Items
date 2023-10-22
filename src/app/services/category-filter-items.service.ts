import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { MatDialog } from "@angular/material/dialog";

@Injectable({
  providedIn: 'root'
})

export class CategoryFilterItemsService {

  protected selectedCategories = new BehaviorSubject<string[]>([]);
  selectedCategories$ = this.selectedCategories.asObservable();
  private resetFormSubject = new BehaviorSubject<boolean>(false);
  resetForm$ = this.resetFormSubject.asObservable();

  constructor(private dialog: MatDialog ) { }

  selectCategories(categories: string[]) {
    this.selectedCategories.next(categories);
  }

  openDialog(component: any) {
    return this.dialog.open(component);
  }

  triggerFormReset() {
    this.resetFormSubject.next(true);
  }

}
