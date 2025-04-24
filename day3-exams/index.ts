interface Product {
    id: number,
    name: string,
    price: number
}

interface Book extends Product {
    author: string,
}

let book: Book = {
    id: 1,
    name: "The Great Gatsby",
    price: 10.99,
    author: "F. Scott Fitzgerald",
}

function wrapInArray<T>(item: T): T[] {
    return [item];
}

class Storages<T> {
    private items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }

    getAll(): T[] {
        return this.items;
    }
}

const bookStorage = new Storages<string>();

bookStorage.add("The Great Gatsby");
bookStorage.add("1984");
bookStorage.add("To Kill a Mockingbird");

console.log(bookStorage.getAll());

interface Apiresponse<T> {
    success: boolean,
    data: T,
}

function handleApiresponse<T>(response: Apiresponse<T>) {
    if (response.success) {
        console.log("Data:", response.data);
    } else {
        console.log("Error fetching data");
    }
}