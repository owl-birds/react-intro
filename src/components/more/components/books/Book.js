import Card from "../ui/Card";
import classes from "./Book.module.css";
const Book = ({ title }) => {
  //   const { title } = props.book;
  const detailHandler = (title) => {
    console.log("title:", title);
  };
  const eventEx = (event) => {
    console.log(event);
    console.log(event.target);
  };
  return (
    <Card
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <div className={classes.headerWrapper}>
        <h1 className={classes.title}>{title}</h1>
        <span className={classes.author}>Author</span>
      </div>
      <img
        className={classes.image}
        src="https://images.unsplash.com/photo-1528459061998-56fd57ad86e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Ym9vayUyMGNvdmVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        alt="..."
      />
      <article className={classes.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        maximus, risus eu ultricies viverra, ex nunc tincidunt erat, in varius
        tellus lorem et nisl.
      </article>
      <button onClick={() => detailHandler(title)}>Details</button>
      <button onClick={eventEx}>Event Consolo.log</button>
    </Card>
  );
};
export default Book;
