import { Product } from "../models/Product";

export class DiscountService {
    constructor( private discount: number, private products: Product[]) {}

    productDiscount(): Product[] {
        return this.products.map(product => {
            return {
                ...product,
                price: product.price - (product.price * this.discount / 100)
            };
        });
    }

}