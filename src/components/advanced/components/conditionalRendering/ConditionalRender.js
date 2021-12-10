import { useState, useEffect } from "react";

import classes from "./ConditionalRender.module.css";

const url = "https://api.github.com/users/mojombo";
const ConditionalRender = () => {
  // CONDITIONAL RENDERING
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isFound, setIsFound] = useState(false);
  const [user, setUser] = useState("user");
  const fetchUser = async (url) => {
    try {
      const res = await fetch(url);
      //   console.log(res.status);
      if (res.status >= 400 && res.status < 500) {
        setIsLoading(() => false);
        setIsError(() => false);
        setIsFound(() => false);
        return;
      }
      const data = await res.json();
      //   console.log(data);
      await setUser(() => data.login);
      // logic
      setIsLoading(() => false);
      setIsError(() => false);
      setIsFound(() => true);
    } catch (error) {
      console.log(error);
      setIsError(() => true);
    }
  };
  useEffect(() => {
    fetchUser(url);
    console.log("OK");
  }, []); // onlu run on the initial render

  // SHORT CIRCUIT
  // https://stackoverflow.com/questions/9344305/what-is-short-circuiting-and-how-is-it-used-when-programming-in-java
  // A short circuit operator is one that doesn't
  // necessarily evaluate all of its operands
  const [text, setText] = useState("");
  const firstValue = text || "hello world";
  const secondValue = text && "hello world!!";

  // ternary test
  const [isTest, setTest] = useState(false);

  if (isLoading) return <h2 className={classes.title}>LOADING ...</h2>;
  if (isError) return <h2 className={classes.title}>ERROR!!!!!</h2>;
  if (!isFound) return <h2 className={classes.title}>404 NOT FOUND</h2>;
  return (
    <section className={classes.container}>
      <h1 className={classes.title}>CONDITIONAL RENDERING</h1>
      <h1 className={classes.title}>{user}</h1>
      <section className={classes.container}>
        <h1 className={classes.title}>Short Circuit</h1>
        <div className={classes.container}>
          <h2 className={classes.title}>value:{firstValue}</h2>
          <h2 className={classes.title}>value:{secondValue}</h2>
        </div>
        <h4 className={classes.title}>:{text || "DEFAULT VALUE"}</h4>
        <h4 className={classes.title}>:{!text && "RESULT AFTER NO FALSE"}</h4>
      </section>
      {isTest && <h1 className={classes.title}>&& TEST</h1>}
      {isTest ? (
        <h1 className={classes.title}>TERNARY TRUE</h1>
      ) : (
        <h1 className={classes.title}>TERNARY FALSE</h1>
      )}
      <button
        onClick={() => {
          setTest(!isTest);
        }}
      >
        toggle && test
      </button>
    </section>
  );
};
export default ConditionalRender;
