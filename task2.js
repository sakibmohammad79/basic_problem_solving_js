//2.Task: Object Manipulation

//Create An Array Of Objects Representing Books With Properties Like Title, Author, And Year. Write A Function
// That Takes The Array And Returns A New Array With Only The Book Titles. Print The Result.

const books = [
  {
    title: "Pather Panchali",
    author: "Bibhutibhushan Bandopadhyay",
    year: 1929,
  },
  { title: "Gora", author: "Rabindranath Tagore", year: 1910 },
  { title: "Chander Pahar", author: "Bibhutibhushan Bandopadhyay", year: 1937 },
  { title: "Srikanta", author: "Sarat Chandra Chattopadhyay", year: 1917 },
  { title: "Feluda Samagra", author: "Satyajit Ray", year: 1965 },
];

const bookTitle = (books) => {
  const bookTitle = books.map((book) => book.title);
  return bookTitle;
};

const bookTitleResult = bookTitle(books);
//console.log(bookTitleResult);
