import { Component, OnInit } from '@angular/core';
import { ProductListModel } from "../../models/product-list.model";
import { ProductListService } from "../../services/product-list.service";

@Component({
    selector: 'app-photography-details',
    templateUrl: './photography-details.component.html',
    styleUrls: ['./photography-details.component.scss']
})

export class PhotographyDetailsComponent implements OnInit {

    bestsellerProducts!: ProductListModel[];
    productList!: ProductListModel[];
    featuredProduct!: ProductListModel[];

    constructor(private productService: ProductListService) {
    }

    ngOnInit(): void {
        this.getProducts();
    }

    getProducts() {
        this.productService.getAllProductList().subscribe({
            next: (res) => {
                this.productList = res;
                this.determineBestSellerProduct();
                this.determinateFeaturedProduct();
            }
        })
    }

    determineBestSellerProduct() {
        const allProducts: ProductListModel[] = this.productList;
        const sortedProduct = allProducts.filter((product) => product.bestseller);
        this.bestsellerProducts = sortedProduct.slice(0, 3);
    }

    determinateFeaturedProduct() {
        const allProducts: ProductListModel[] = this.productList;
        const sortedProduct = allProducts.filter((product) => product.featured);
        this.featuredProduct = sortedProduct.slice(0, 1);
    }
}
