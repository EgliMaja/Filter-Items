import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";

@Injectable({
  providedIn: 'root'
})

export class CategoryFilterItemsService {

  protected selectedCategories = new BehaviorSubject<string[]>([]);
  selectedCategories$ = this.selectedCategories.asObservable();

  constructor(private dialog: MatDialog ) { }

  selectCategories(categories: string[]) {
    this.selectedCategories.next(categories);
  }

  openDialog(component: any) {
    return this.dialog.open(component);
  }

  closeDialog() {
    return this.dialog.afterAllClosed;
  }

}
