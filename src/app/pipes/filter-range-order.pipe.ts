import { Pipe , PipeTransform } from "@angular/core";
import { ProductListModel } from "../models/product-list.model";

@Pipe({
  name: 'filterRangeOrder'
})

export class FilterRangeOrderPipe implements PipeTransform {

  transform(products: ProductListModel[], selectedOrderRange: string[]): ProductListModel[] {
    if (!products || !selectedOrderRange || selectedOrderRange.length === 0) {
      return products;
    }

    const isInSelectedRange = (product: ProductListModel) => {
      return selectedOrderRange.some(range =>{
          switch (range) {
              case 'Lower then $20':
                  return product.price >= 0 && product.price <= 20;
              case '$20-$100':
                  return product.price >= 20 && product.price <= 100;
              case '$100-$200':
                  return product.price >= 100 && product.price <= 200;
              case 'More than $200':
                  return product.price > 200
              default: return  false;
          }
      })
    }

    return products.filter( product => isInSelectedRange(product))
  }
}
