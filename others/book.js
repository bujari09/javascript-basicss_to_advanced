class Person {
    #name;
    #id;

    constructor(name, id) {
        if (this.constructor === Person) {
            throw new Error("Person is an abstract class and cannot be instantiated directly.");
        }
        this.#name = name;
        this.#id = id;
    }

    getName() {
        return this.#name;
    }

    getId() {
        return this.#id;
    }

    
    getRole() {
        throw new Error("getRole() must be implemented by subclass");
    }
}


class Reader extends Person {
    #borrowedBooks = [];

    constructor(name, id) {
        super(name, id);
    }

    borrowBook(book) {
        if (!book.isAvailable()) {
            console.log(`${book.getTitle()} nuk është i disponueshëm.`);
            return;
        }
        this.#borrowedBooks.push(book);
        book.setAvailable(false);
        console.log(`${this.getName()} huazoi librin "${book.getTitle()}".`);
    }

    returnBook(book) {
        const index = this.#borrowedBooks.indexOf(book);
        if (index > -1) {
            this.#borrowedBooks.splice(index, 1);
            book.setAvailable(true);
            console.log(`${this.getName()} ktheu librin "${book.getTitle()}".`);
        }
    }

    listBorrowedBooks() {
        return this.#borrowedBooks.map(book => book.getTitle());
    }

    getRole() {
        return "Reader";
    }
}


class Admin extends Person {
    constructor(name, id) {
        super(name, id);
    }

    addBook(library, book) {
        library.addBook(book);
        console.log(`Administratori shtoi librin: ${book.getTitle()}`);
    }

    removeBook(library, book) {
        library.removeBook(book);
        console.log(`Administratori fshiu librin: ${book.getTitle()}`);
    }

    getRole() {
        return "Admin";
    }
}

class Book {
    #title;
    #author;
    #available = true;

    constructor(title, author) {
        this.#title = title;
        this.#author = author;
    }

    getTitle() {
        return this.#title;
    }

    getAuthor() {
        return this.#author;
    }

    isAvailable() {
        return this.#available;
    }

    setAvailable(status) {
        this.#available = status;
    }
}


class Library {
    #books = [];

    addBook(book) {
        this.#books.push(book);
    }

    removeBook(book) {
        this.#books = this.#books.filter(b => b !== book);
    }

    listBooks() {
        this.#books.forEach(book => {
            console.log(`📖 ${book.getTitle()} nga ${book.getAuthor()} - ${book.isAvailable() ? "Disponibël" : "I zënë"}`);
        });
    }

    getBooks() {
        return this.#books;
    }
}

const library = new Library();

const admin = new Admin("Arben", 1);
const reader = new Reader("Elira", 101);

const book1 = new Book("Kronikë në Gur", "Ismail Kadare");
const book2 = new Book("Alkimisti", "Paulo Coelho");

admin.addBook(library, book1);
admin.addBook(library, book2);

library.listBooks();

reader.borrowBook(book1);
reader.borrowBook(book1); 

reader.returnBook(book1);
reader.borrowBook(book1);

console.log(`Libra të huazuar nga ${reader.getName()}:`, reader.listBorrowedBooks());