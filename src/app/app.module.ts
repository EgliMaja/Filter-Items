import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent} from "./components/navbar/navbar.component";
import { MainContentComponent } from './components/main-content/main-content.component';
import { PhotographyDetailsComponent} from "./components/photography-details/photography-details.component";
import { PhotographyComponent} from "./components/photography/photography.component";
import { ProductListComponent} from "./components/photography/product-list/product-list.component";
import { FilterCategoryComponent} from "./components/photography/sidebar-filters/filter-category/filter-category.component";
import { FilterPriceRangeComponent} from "./components/photography/sidebar-filters/filter-price-range/filter-price-range.component";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatCardModule } from "@angular/material/card";
import { HttpClientModule } from "@angular/common/http";
import { ObserversModule } from "@angular/cdk/observers";
import { MatMenuModule } from "@angular/material/menu";
import { MatDialogModule } from "@angular/material/dialog";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { NgxPaginationModule } from "ngx-pagination";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatListModule } from "@angular/material/list";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ProductSortPipe } from "./pipes/sorting.pipe";
import { FilterCategoryPipe} from "./pipes/filter-category.pipe";
import { FilterRangeOrderPipe } from "./pipes/filter-range-order.pipe";
import { CommonModule } from "@angular/common";
import { SidebarFiltersComponent } from './components/photography/sidebar-filters/sidebar-filters.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainContentComponent,
    PhotographyDetailsComponent,
    PhotographyComponent,
    ProductListComponent,
    FilterCategoryComponent,
    FilterPriceRangeComponent,
    MainContentComponent,
    ProductSortPipe,
    FilterCategoryPipe,
    FilterRangeOrderPipe,
    SidebarFiltersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ObserversModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatMenuModule,
    MatDialogModule,
    MatSnackBarModule,
    NgxPaginationModule,
    MatInputModule,
    MatSelectModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
