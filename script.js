const myLibrary = [];

// Book object constructor
function Book(title, author, pages, read) {
    if (!new.target) {
        throw Error("Must use the 'new' operator to create a instance");
    }

    this.id = crypto.randomUUID()
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
addBookToLibrary('1984', 'G. Orwell', 300, true);

const table = document.getElementById('libraryTable');

// Create table headers
const thead = document.createElement('thead');
const headerRow = document.createElement('tr');

Object.keys(myLibrary[0]).forEach(key => {
    const th = document.createElement('th');
    console.log(key);
    th.textContent = key
    headerRow.appendChild(th);
})

thead.appendChild(headerRow);
table.appendChild(thead);

// Create table body and populate with books
const tbody = document.createElement('tbody');

myLibrary.forEach(book => {
    const tr = document.createElement('tr')
    
    Object.values(book).forEach(value => {
        const td = document.createElement('td');
        td.textContent = value;
        tr.appendChild(td);
    });

    tbody.appendChild(tr);
});

table.appendChild(tbody);

const addBtn = document.getElementById('addBookBtn');
const dialog = document.getElementById('addBookDlg'); 
const closeDlgBtn = document.getElementById('closeDlgBtn');

// Show "Add Book" dialog
addBtn.addEventListener('click', () => {
    dialog.showModal();
})

// Close "Add Book" dialog
closeDlgBtn.addEventListener('click', () => {
    dialog.close();
});