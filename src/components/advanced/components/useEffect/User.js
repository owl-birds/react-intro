import classes from "./UseEffectEx.module.css";
const User = (props) => {
  return (
    <div className={classes.userBox}>
      <img
        className={classes.userImage}
        src={props.avatar_url}
        alt={props.login}
      />
      <div className={classes.userDetails}>
        <h3 className={classes.userName}>{props.login}</h3>
        <a className={classes.userLink} href={props.html_url}>
          Profile
        </a>
      </div>
    </div>
  );
};
export default User;
