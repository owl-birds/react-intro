import React, { useState, useCallback, useMemo, useEffect } from "react";
import { useFetch } from "../customHooks/useFetch";

import classes from "./ReactMemo.module.css";

import Product from "./Product";

// React.memo will be looking at the props
// useMemo specifically for the value

const url = "https://course-api.com/javascript-store-products";
const calculateMostExpensive = (data) => {
  console.log("HELLOO");
  return (
    data.reduce((expensive, item) => {
      const price = item.fields.price;
      if (price >= expensive) {
        expensive = price;
      }
      return expensive;
    }, 0) / 100
  );
};
const ReactMemo = () => {
  const { data } = useFetch(url);
  // useEffect(() => {
  //   console.log("REACT MEMO HERE");
  // }, []);
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState(0);
  const mostExpensive = useMemo(() => calculateMostExpensive(data), [data]);
  const addToCart = useCallback(() => {
    setCart(() => cart + 1);
  }, [cart]); // everytime u change cart value, u alsos create the function
  // console.log(data);
  return (
    <section className={classes.container}>
      <h1 className={classes.title}>MEMO CALLBACK ETC OPTIMIZATION</h1>
      <div className={classes.container}>
        <h1 className={classes.title}>{count}</h1>
        <button onClick={() => setCount(count + 1)}>+1</button>
        <h1 className={classes.title}>cart : {cart}</h1>
        <h2 className={classes.title}>
          {/* Most Expensive : ${calculateMostExpensive(data)} */}
          {/* imagine having hundred thousand of data
          its gonna take a long time to find the value 
          and u have to re-render it to
          it will nice to have it remembered the value*/}
          {/* USING MEMO */}
          Most Expensive : {mostExpensive}
        </h2>
      </div>
      <BigList addToCart={addToCart} />
    </section>
  );
};
// it is memoizing the valeu
// iis the value is change or not
//  if it is not it will not rerender
const BigList = React.memo(({ addToCart }) => {
  useEffect(() => {
    console.log("BIG LIST HERE");
  });
  const { data } = useFetch(url);
  // console.log(data);
  return (
    <section className={classes.container}>
      {data.map((product) => (
        <Product key={product.id} {...product} addToCart={addToCart} />
      ))}
    </section>
  );
});
export default ReactMemo;
