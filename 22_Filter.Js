const book = [
  {
    bookName: "Pride and Prejudice",
    authorName: "Jane Austen",
    publish: 1990,
    edition: 2000,
  },

  {
    bookName: "1984",
    authorName: " George Orwell",
    publish: 1980,
    edition: 1995,
  },

  {
    bookName: "Crime and Punishment",
    authorName: "Fyodor Dostoevsky",
    publish: 1995,
    edition: 2002,
  },

  {
    bookName: "Hamlet",
    authorName: "William Shakespeare",
    publish: 2000,
    edition: 2005,
  },

  {
    bookName: "One Hundred Years of Solitude",
    authorName: "Gabriel García Márquez",
    publish: 1998,
    edition: 2008,
  },

  {
    bookName: "Anna Karenina",
    authorName: "Leo Tolstoy",
    publish: 1999,
    edition: 2010,
  },
];

let userBook = book.filter((bk) => bk.authorName === "Gabriel García Márquez");
console.log(userBook);

userBook = book.filter((bk) => bk.publish >= 1999);
console.log(userBook);

userBook = book.filter((bk) => {
  return bk.publish == 1990 && bk.authorName === "Jane Austen";
});
console.log(userBook);
