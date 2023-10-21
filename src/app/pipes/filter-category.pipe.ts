import { Pipe, PipeTransform } from "@angular/core";
import { ProductListModel } from "../models/product-list.model";

@Pipe({
    name:'filterCategory'
})

export class FilterCategoryPipe implements PipeTransform {
  transform(products: ProductListModel[], selectedCategories: string[]): ProductListModel[] {
    if (!products || !selectedCategories || selectedCategories.length === 0) {
      return products;
    }
    // console.log(filteredProducts , 'filtered')
    return products.filter(product => selectedCategories.some(category => product.category.includes(category)));
  }
}
