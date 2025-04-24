"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscountService = void 0;
var DiscountService = /** @class */ (function () {
    function DiscountService(discount, products) {
        this.discount = discount;
        this.products = products;
    }
    DiscountService.prototype.productDiscount = function () {
        var _this = this;
        return this.products.map(function (product) {
            return __assign(__assign({}, product), { price: product.price - (product.price * _this.discount / 100) });
        });
    };
    return DiscountService;
}());
exports.DiscountService = DiscountService;
