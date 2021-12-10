import { useState, useEffect } from "react";
import classes from "./UseEffectEx.module.css";

import User from "./User";

const url = "https://api.github.com/users";

const FetchData = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUser] = useState([]);
  // useEffect(async () => { }) // this is will
  // resulted in error
  const getUsers = async () => {
    const res = await fetch(url);
    const users = await res.json();
    // console.log(users);
    // setUser(users) :::: problem ??
    // its trigger re-render
    // then it become infinite loop
    // so we need tto do something
    // solution : array of depedencies

    await setUser(() => {
      return users;
    });
    setLoading(false);
  };
  useEffect(() => {
    getUsers();
  }, []); // u only wanna run on the initial render
  console.log("INFINITE LOOP ???");
  if (loading) {
    return <h1 className={classes.title}>LOADING ...</h1>;
  }
  return (
    <section className={classes.container}>
      <h1 className={classes.title}>Github User</h1>
      <span className={classes.link}>sources : {url}</span>
      <div className={classes.usersContainer}>
        {users.map((user) => {
          return (
            <li key={user.id} className={classes.li}>
              <User {...user} />
            </li>
          );
        })}
      </div>
    </section>
  );
};
export default FetchData;
