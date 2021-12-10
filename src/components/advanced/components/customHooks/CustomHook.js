import { useState, useEffect } from "react";
import classes from "./CustomHook.module.css";

// custom hooks
import { useFetch } from "./useFetch";

const url = "https://course-api.com/javascript-store-products";
const CustomHook = () => {
  const { isLoading, data } = useFetch(url);
  // const [isLoading, setIsLoading] = useState(true);
  // const [products, setProduct] = useState([]);
  // if (!isLoading) {
  //   setLoad(() => false);
  // }
  const loading = <div className={classes.title}>LOADING ...</div>;
  // console.log(data);
  // console.log("TEST");
  // const getProduct = () => {
  //   const { isLoading, data } = useFetch(url);
  // }
  if (isLoading) {
    return loading;
  }
  return (
    <section className={classes.container}>
      <h1 className={classes.title}>CUSTOM HOOK</h1>
      <section className={classes.container}>
        {isLoading
          ? loading
          : data.map((product) => (
              <div key={product.id} className={classes.container}>
                <h1 className={classes.title}>{product.fields.name}</h1>
              </div>
            ))}
      </section>
    </section>
  );
};
export default CustomHook;
