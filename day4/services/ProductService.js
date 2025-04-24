"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
var ProductService = /** @class */ (function () {
    function ProductService() {
        this.products = [];
    }
    ProductService.prototype.add = function (products) {
        this.products.push(products);
    };
    ProductService.prototype.removeById = function (id) {
        this.products = this.products.filter(function (p) { return p.id != id; });
    };
    ProductService.prototype.list = function () {
        return this.products;
    };
    return ProductService;
}());
exports.ProductService = ProductService;
