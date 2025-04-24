import { Product } from "./models/Product";
import { DiscountService } from "./services/DiscountService";
import { ProductService } from "./services/ProductService";
import { log } from "./utils/logger";

const service = new ProductService();


const p1: Product = { id: 1, name: "Pencil", price: 10000 };
const p2: Product = { id: 2, name: "Eraser", price: 20000 };

service.add(p1);
service.add(p2);

log("Products after adding:");
console.log(service.list())

const serviceDiscount = new DiscountService(10, service.list());
log("Products after applying discount:");
console.log(serviceDiscount.productDiscount())


service.removeById(1); 
log("Products after removing id 1:");
console.log(service.list())

function safeParse<T>(json: string) : T | null {
    try {
        return JSON.parse(json) as T;
    } catch (error) {
        console.error("Error parsing JSON:", error);
        return null;
    }
}

const jsonString = '{ "id": 2, "namee": "Eraser", "price": 20000 }';

const parsedData = safeParse<Product>(jsonString);

console.log("Parsed data:", parsedData);
