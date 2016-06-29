System.register(['angular2/core', "angular2/router", './products-filter.pipe', '../shared/star.component', './products.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, products_filter_pipe_1, star_component_1, products_service_1;
    var ProductListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (products_filter_pipe_1_1) {
                products_filter_pipe_1 = products_filter_pipe_1_1;
            },
            function (star_component_1_1) {
                star_component_1 = star_component_1_1;
            },
            function (products_service_1_1) {
                products_service_1 = products_service_1_1;
            }],
        execute: function() {
            ProductListComponent = (function () {
                function ProductListComponent(_ProductSerice) {
                    this._ProductSerice = _ProductSerice;
                    this.pageTitle = 'პროდუქტების ჩამონათვალი';
                    this.imageWidht = 20;
                    this.imageMargin = 2;
                    this.showImage = false;
                }
                ProductListComponent.prototype.toggleImage = function () {
                    this.showImage = !this.showImage;
                };
                ProductListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._ProductSerice.getProducts()
                        .subscribe(function (products) { return _this.products = products; }, function (error) { return _this.errorMessage = error; });
                };
                ProductListComponent.prototype.onRatingClicked = function (message) {
                    this.pageTitle = 'produck list' + message;
                };
                ProductListComponent = __decorate([
                    core_1.Component({
                        // selector : 'pm-products',
                        templateUrl: 'app/products/product-list.component.html',
                        styleUrls: ['app/products/product-list.component.css'],
                        pipes: [products_filter_pipe_1.ProducktFilterPipe],
                        directives: [star_component_1.StarComponent, router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [products_service_1.ProductSerice])
                ], ProductListComponent);
                return ProductListComponent;
            }());
            exports_1("ProductListComponent", ProductListComponent);
        }
    }
});
//# sourceMappingURL=product-list.component.js.map