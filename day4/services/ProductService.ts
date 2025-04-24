import { Product } from "../models/Product";

export class ProductService {
    private products: Product[] = [];

    add(products: Product): void {
        this.products.push(products);
    }

    removeById(id: number): void {
        this.products = this.products.filter(p => p.id != id);
    }

    list(): Product[] {
        return this.products;
    }
}