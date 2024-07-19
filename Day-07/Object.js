*********************   Activity 1: Object Creation and Access   *********************   

• Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.

let bookObj = {
    title: 'Chai Aur Code',
    author: 'Hitesh Choudhary',
    year: 2023
}
console.log(bookObj)


• Task 2: Access and log the title and author properties of the book object.
  
console.log(bookObj.title)
console.log(bookObj.author);
console.log(bookObj.year);


*********************    Activity 2: Object Methods    *********************   

• Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.

let booksObj = {
    title: 'Chai Aur Code',
    author: 'Hitesh Choudhary',
    year: 2023,
    bookfuntion: function () {
        return `Title: ${this.title} And Author: ${this.author}`
    }
}


console.log(booksObj.bookfuntion())


• Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.
let mybook = {
    title: 'Hitesh Tut',
    author: 'hitesh',
    year: '2023',
    mybookFunction: function (year) {
        year = 2024
        return `Updated year ${year}`
    }

}
console.log(mybook.mybookFunction())



*********************    Activity 3: Nested Objects   *********************   

• Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.
let myLibrary = {
    libraryName: 'sigma',
    books: [
        {
            title: "To Kill a Mockingbird",
            author: "Harper Lee"
        },
        {
            title: "1984",
            author: "George Orwell"
        },
        {
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald"
        }
    ]
}

console.log(myLibrary)


• Task 6: Access and log the name of the library and the titles of all the books in the library.

  
console.log('Library Name : ', myLibrary.libraryName)
myLibrary.books.forEach(book => {
    console.log('Book Title : ', book.title)
});


*********************   Activity 4: The this Keyword    *********************   


• Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.

var mybookObj = {
    bookTitle: "Lost My Life",
    bookAuthor: "bythewayAuthor",
    publishYear: "2024",
    bookfun: function () {
        return `Book Title is ${this.bookTitle} and Book Pusblish Year is ${this.publishYear} `
    }
}

console.log(mybookObj.bookfun())

*********************   Activity 5: Object Iteration   *********************   

• Task 8: Use a for... in loop to iterate over the properties of the book object and log each property and its value.

for (let property in mybookObj) {
    if (mybookObj.hasOwnProperty(property)) {
        console.log(`${property} : ${mybookObj[property]} `)
    }
}

 • Task 9: Use Object. keys and object. values methods to log all the keys and values of the book object.

let book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    getTitleAndYear: function () {
        return `${this.title} (${this.year})`;
    }
};

let keys = Object.keys(book)
console.log(keys)
let vales = Object.values(book)
console.log(vales)
