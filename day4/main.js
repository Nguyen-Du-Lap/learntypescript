"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DiscountService_1 = require("./services/DiscountService");
var ProductService_1 = require("./services/ProductService");
var logger_1 = require("./utils/logger");
var service = new ProductService_1.ProductService();
var p1 = { id: 1, name: "Pencil", price: 10000 };
var p2 = { id: 2, name: "Eraser", price: 20000 };
service.add(p1);
service.add(p2);
(0, logger_1.log)("Products after adding:");
console.log(service.list());
var serviceDiscount = new DiscountService_1.DiscountService(10, service.list());
(0, logger_1.log)("Products after applying discount:");
console.log(serviceDiscount.productDiscount());
service.removeById(1);
(0, logger_1.log)("Products after removing id 1:");
console.log(service.list());
function safeParse(json) {
    try {
        return JSON.parse(json);
    }
    catch (error) {
        console.error("Error parsing JSON:", error);
        return null;
    }
}
var jsonString = '{ "id": 2, "namee": "Eraser", "price": 20000 }';
var parsedData = safeParse(jsonString);
console.log("Parsed data:", parsedData);
