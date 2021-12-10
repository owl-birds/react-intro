import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import classes from "./NestedRoute.module.css";
const NestedRoute = () => {
  return (
    <section className={classes.container}>
      <h1 className={classes.title}>NESTED ROUTE</h1>
      <nav className={classes.container}>
        <Link to="/nested-route/wow">WOW</Link>
        <Link to="/nested-route/people">PEOPLE</Link>
        <Link to="/nested-route">HOME</Link>
      </nav>
      <section className={classes.container}>
        {/* THE NESTED PART WILL DISPLAY BELOW */}
        <Outlet />
      </section>
    </section>
  );
};
export default NestedRoute;
