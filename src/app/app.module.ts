import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from "@angular/fire/compat";
import { environment } from "../environments/environment";
import { NavbarComponent } from './navbar/navbar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { PhotographyDetailsComponent } from './photography-details/photography-details.component';
import { PhotographyComponent } from './photography/photography.component';
import { ProductListComponent} from "./photography/product-list/product-list.component";
import { FilterCategoryComponent} from "./photography/filter-category/filter-category.component";
import { FilterPriceRangeComponent} from "./photography/filter-price-range/filter-price-range.component";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatCardModule } from "@angular/material/card";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainContentComponent,
    PhotographyDetailsComponent,
    PhotographyComponent,
    ProductListComponent,
    FilterCategoryComponent,
    FilterPriceRangeComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        MatButtonModule,
        MatCheckboxModule,
        MatCardModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
