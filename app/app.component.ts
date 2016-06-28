import { Component } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import 'rxjs/Rx';
import {ProductListComponent} from "./products/product-list.component";
import {ProductSerice} from './products/products.service';
import {ROUTER_PROVIDERS} from "angular2/router";
import { ROUTER_PROVIDERS, RouteConfig } from 'angular2/router';
import {WelcomeComponent} from "./home/welcome.component";

@Component({
  selector : 'pm-app',
  template: ` 
    <div> 
         <nav class='navbar navbar-default'> 
            <div class='container-fluid'> 
                <a class='navbar-brand'>{{pageTitle}}</a> 
                <ul class='nav navbar-nav'> 
                    <li><a href='#'>Home</a></li> 
                    <li><a href='#'>Product List</a></li> 
                </ul> 
            </div> 
        </nav> 
        <div class='container'> 
            <router-outlet></router-outlet> 
        </div> 
     </div> 
     `,
  directives : [ProductListComponent],
  providers : [ProductSerice, HTTP_PROVIDERS, ROUTER_PROVIDERS]
})
@RouteConfig([
  { path : '/Welcome',  name: 'Welcome', component : WelcomeComponent, useAsDefault : true },
  { path : '/Products',  name: 'Products', component : ProductListComponent }
])
export class AppComponent{
  pageTitle: string = "Test Title";
}
