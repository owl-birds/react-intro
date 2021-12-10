import { useEffect, useState } from "react";
// by default useEffect runs after every re-render

import FetchData from "./FetchData";

import classes from "./UseEffectEx.module.css";

const UseEffectEx = () => {
  const [value, setValue] = useState(0);
  // useState preserve the value in each render
  // in useState also trigger the re-render
  useEffect(() => {
    console.log("use EFFECT OVER HERE");
    if (value > 5) {
      document.title = `USE EFFECT INTRO ${value}`;
    }
    // changing the tab title
  }, [value]); // run after re-render
  // useEffect is use when we (side effect)
  // do some work outside
  // component : data fetching,
  // listeing to events, subscription, and etc

  // we cant use hooks (ex useState, useEffect, etc)
  // place hooks in conditionals (WE CANT)
  // ex
  // if () {some HOOKS} // it doesnt work
  // but we can use it in the callback func

  // the second arguments in the useEffect
  // is the array of depedencies
  // if its empty : [] : it only run on the initial render
  // [value] :  it will run when there is change
  // on that value

  useEffect(() => {
    console.log("U CAN USE AS MANY USE EFFECT AS YOU WANT");
  }, []); // only run on the initial render
  console.log("render component");

  // NEW
  const [size, setSize] = useState(window.innerWidth);
  console.log(size);
  const checkSize = () => {
    setSize(() => window.innerWidth);
  };
  useEffect(() => {
    console.log("use effect");
    window.addEventListener("resize", checkSize);
    //   to cleaning up EventListener on the window
    return () => {
      console.log("cleanup");
      window.removeEventListener("resize", checkSize);
    };
    //   u have to set up clean up function
    //   everytime u set up a side effect
    //
  });
  return (
    <section className={classes.container}>
      <h1 className={classes.title}>USE EFFECT</h1>
      <div className={classes.container}>
        <h1 className={classes.title}>{value}</h1>
        <button className={classes.btn} onClick={() => setValue(value + 1)}>
          +
        </button>
      </div>
      <section className={classes.container}>
        <h1 className={classes.title}>WINDOW</h1>
        <h2 className={classes.title}>{size} PX</h2>
      </section>
      <FetchData />
    </section>
  );
};
export default UseEffectEx;
