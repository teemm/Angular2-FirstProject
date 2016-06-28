import { Component } from 'angular2/core';
import {ProductListComponent} from "./products/product-list.component";
import {ProductSerice} from './products/products.service';

@Component({
  selector : 'pm-app',
  template: '' +
  '<div>' +
  '<h1> {{pageTitle}}</h1>' +
    '<div>' +
      '<pm-products></pm-products>' +
    '</div>' +
  '</div>',
  directives : [ProductListComponent],
  providers : [ProductSerice]
})

export class AppComponent{
  pageTitle: string = "Test Title";
}
