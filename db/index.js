class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

const authors = [
  {
    name: 'J.K Rowling',
    books: [new Book('Harry Potter', 'J.K.Rowling')]
  },
  {
    name: 'Michael Crichton',
    books: [new Book('Jurassic Park', 'Michael Crichton')]
  }
];

const books = new Set();
authors.forEach(author => {
  author.books.forEach(book => books.add(book));
});

module.exports = {
  authors,
  books
};
