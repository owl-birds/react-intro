import { useFetch } from "../customHooks/useFetch";
import classes from "./PropTypes.module.css";
import Product from "./Product";
const url = "https://course-api.com/react-prop-types-example";
const PropTypes = () => {
  const { data } = useFetch(url);
  console.log(data);
  return (
    <section className={classes.container}>
      <h1 className={classes.title}>PROP TYPES</h1>
      <section className={classes.container}>
        {data.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </section>
    </section>
  );
};
export default PropTypes;
