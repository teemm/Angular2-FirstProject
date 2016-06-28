import { Component, OnInit } from 'angular2/core';
import { IProduct } from  './products';
import { ProducktFilterPipe } from './products-filter.pipe'
import { StarComponent } from '../shared/star.component';
import { ProductSerice } from './products.service'

@Component ({
    selector : 'pm-products',
    templateUrl : 'app/products/product-list.component.html',
    styleUrls : ['app/products/product-list.component.css'],
    pipes : [ProducktFilterPipe],
    directives : [StarComponent]
})

export class ProductListComponent implements OnInit{
    pageTitle: string = 'პროდუქტების ჩამონათვალი';
    imageWidht: number = 20;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter : string;
    products : IProduct[];
    errorMessage : string;
    constructor(private _ProductSerice: ProductSerice){

    }
    toggleImage(): void {
        this.showImage = !this.showImage;
    }
    ngOnInit(): void{
        this._ProductSerice.getProducts()
            .subscribe(
                    products => this.products = products,
                    error => this.errorMessage = <any>error);
    }
    onRatingClicked(message : string) : void {
        this.pageTitle = 'produck list' +  message;
    }
}