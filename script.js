const myLibrary = [];

// Book object constructor
function Book(title, author, pages, read) {
    if (!new.target) {
        throw Error("Must use the 'new' operator to create a instance");
    }

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read || false; // Default to false if not provided;
}

Book.prototype.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? "read" : "not read"}`;
};

function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages, read)); 
}

addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 295, false);

console.log(myLibrary[0].info()); // "The Hobbit by J.R.R. Tolkien, 295 pages, not read"
