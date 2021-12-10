import { useEffect } from "react";
import classes from "./ReactMemo.module.css";
const Product = ({ id, fields, addToCart }) => {
  useEffect(() => {
    console.log("PRODUCT HERE ");
  });
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Product name : {fields.name}</h1>
      <h2 className={classes.title}>Company : {fields.company}</h2>
      <h3 className={classes.title}>price {fields.price}</h3>
      <button onClick={() => addToCart()}>add to cart</button>
      {/* everytiem u click the button
      it will re-render everything again */}
    </div>
  );
};
export default Product;
