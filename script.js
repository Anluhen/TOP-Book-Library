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

theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);

console.log(theHobbit.info()); // Outputs: "The Hobbit by J.R.R. Tolkien, 295 pages, not read"

console.log(Object.getPrototypeOf(theHobbit) === Book.prototype); // true

console.log(theHobbit.valueOf());