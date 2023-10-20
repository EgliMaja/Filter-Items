import { Pipe, PipeTransform } from '@angular/core';
import {ProductListModel} from "../models/product-list.model";

@Pipe({
    name: 'productSort'
})
export class ProductSortPipe implements PipeTransform {
    transform(products: ProductListModel[], sortBy: string): ProductListModel[] {
        if (!products) {
            return [];
        }
        if (sortBy === 'price') {
            return products.slice().sort((a, b) => a.price - b.price);
        } else if (sortBy === 'alphabetical') {
            return products.slice().sort((a, b) => a.name.localeCompare(b.name));
        }
        return products;
    }
}
