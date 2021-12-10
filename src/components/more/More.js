import Book from "./components/books/Book";
import classes from "./More.module.css";
const dummyBooks = [
  { id: 1, title: "The Red Hood" },
  { id: 2, title: "The Little Goblin" },
  { id: 3, title: "Mountain" },
  { id: 4, title: "The Nile River" },
];
const More = () => {
  return (
    <main className={classes.grid}>
      {/* <Book title="The Red Hood" />
      <Book title="The Mountains" />
      <Book title="The Lake" /> */}
      {dummyBooks.map((book) => (
        <Book {...book} key={book.id} />
      ))}
      {/* <Book book={book} key={book.id} /> */}
    </main>
  );
};
export default More;
