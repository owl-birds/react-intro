import classes from "./Advanced.module.css";
import { Link } from "react-router-dom";
const Advanced = () => {
  return (
    <section className={classes.container}>
      <h1 className={classes.appName}>ADVANCED</h1>
      <nav className={classes.nav}>
        <div>
          <Link className={classes.link} to="/advanced/usestate">
            USE STATE
          </Link>
        </div>
        <div>
          <Link className={classes.link} to="/advanced/useeffect">
            USE EFFECT
          </Link>
        </div>
        <div>
          <Link className={classes.link} to="/advanced/conrender">
            CONDITIONAL RENDERING
          </Link>
        </div>
        <div>
          <Link className={classes.link} to="/advanced/forms">
            FORMS
          </Link>
        </div>
        <div>
          <Link className={classes.link} to="/advanced/usereducer">
            USE REDUCER
          </Link>
        </div>
        <div>
          <Link className={classes.link} to="/advanced/propdrilling">
            PROP DRILLING
          </Link>
        </div>
        <div>
          <Link className={classes.link} to="/advanced/usecontext">
            USE CONTEXT
          </Link>
        </div>
        <div>
          <Link className={classes.link} to="/advanced/customhook">
            CUSTOM HOOK
          </Link>
        </div>
        <div>
          <Link className={classes.link} to="/advanced/proptypes">
            PROP TYPES
          </Link>
        </div>
        <div>
          <Link className={classes.link} to="/advanced/memocallback">
            memo callback etc
          </Link>
        </div>
      </nav>
    </section>
  );
};
export default Advanced;
