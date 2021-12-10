import { Link } from "react-router-dom";
import classes from "./NestedRoute.module.css";
const Person = ({ name, id, age }) => {
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>{name}</h1>
      <Link to={`/nested-route/people/${id}`} className={classes.link}>
        DETAIL
      </Link>
    </div>
  );
};
export default Person;
