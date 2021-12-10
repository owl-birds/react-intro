import { Link } from "react-router-dom";
import classes from "./Nav.module.css";
function Nav() {
  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <div className={classes.linkWrapper}>
          <Link className={classes.link} to="/">
            intro
          </Link>
        </div>
        <div className={classes.linkWrapper}>
          <Link className={classes.link} to="/more">
            more
          </Link>
        </div>
        <div className={classes.linkWrapper}>
          <Link className={classes.link} to="/advanced">
            Advanced
          </Link>
        </div>
        <div className={classes.linkWrapper}>
          <Link className={classes.link} to="/nested-route">
            Nested Route
          </Link>
        </div>
      </nav>
    </header>
  );
}
export default Nav;
