export class CartService {
    private cart: Product[] = [];

    add(product: Product): void {
        this.cart.push(product);
    }

    getTotal(): number {
        return this.cart.reduce((total, product) => total + product.price, 0);
    }
}