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

Book.prototype.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? "read" : "not read"}`;
};

Book.prototype.toggleRead = function () {
    this.read = !this.read;
}

function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages, read));
}

addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 295, false);
addBookToLibrary('1984', 'G. Orwell', 300, true);

const table = document.getElementById('libraryTable');

// Create table headers
function drawTable(){
const thead = document.createElement('thead');
const headerRow = document.createElement('tr');

Object.keys(myLibrary[0]).forEach(key => {
const th = document.createElement('th');
console.log(key);
th.textContent = key
headerRow.appendChild(th);
})

const deleteHeader = document.createElement('th');
deleteHeader.textContent = 'Delete';
headerRow.appendChild(deleteHeader); // Add a header for the delete button

thead.appendChild(headerRow);
table.appendChild(thead);
}

drawTable();
// Create table body and populate with books

function updateTable() {
    myLibrary.forEach(book => {
    const tbody = document.createElement('tbody');
    const tr = document.createElement('tr');

    Object.values(book).forEach(value => {
        const td = document.createElement('td');
        td.textContent = value;
        tr.appendChild(td);
    });

    // Add a delete button to each row
    const deleteTd = document.createElement('td');
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.dataset.id = book.id; // Store the book id in the button

    deleteBtn.addEventListener('click', (event) => {
        event.target.closest('tr').remove();
    });

    deleteTd.appendChild(deleteBtn);
    tr.appendChild(deleteTd);

    tbody.appendChild(tr);
    table.appendChild(tbody);
});
};

updateTable(); // Initial table population

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

// Handle "Add Book" form submission
const form = document.getElementById('addBookForm');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const newBook = {}
    newBook['id'] = crypto.randomUUID(); // Generate a new UUID for id
    newBook['title'] = form.title.value;
    newBook['author'] = form.author.value;
    newBook['pages'] = Number(form.pages.value);
    newBook['read'] = form.status.value === 'on' ? true : false; // Convert read checkbox to boolean
    console.log(form.status.value);
    myLibrary.push(newBook);
    updateTable(newBook);
})