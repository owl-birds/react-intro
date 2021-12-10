import classes from "./Card.module.css";
const Card = (props) => (
  <section
    onMouseOver={() => {
      props.onMouseOver();
    }}
    className={classes.card}
  >
    {props.children}
  </section>
);
export default Card;
