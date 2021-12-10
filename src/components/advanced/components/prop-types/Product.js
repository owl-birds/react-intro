import PropTypes from "prop-types";
import classes from "./PropTypes.module.css";
const Product = ({ image, price, name, id }) => {
  //   console.log(image);
  const defaultImg =
    "https://images.unsplash.com/photo-1617293541287-5530026ca9b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60";
  const url = image && image.url;
  return (
    <article className={classes.container}>
      <img className={classes.image} src={url || defaultImg} alt={name} />
      <h1 className={classes.title}>{name}</h1>
      <span className={classes.title}>${price || 2.9}</span>
      {/* what if the data price is unknown */}
    </article>
  );
};

// CHECKING THE PROPS : wehter the the prop is undefined
// https://reactjs.org/docs/typechecking-with-proptypes.html
Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
// setting up default props
Product.defaultProps = {
  name: "DEFAULT NAME",
  //   price: 3.99,
  image: {
    url: "https://images.unsplash.com/photo-1638376867422-0bec495fc781?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  },
};
export default Product;
