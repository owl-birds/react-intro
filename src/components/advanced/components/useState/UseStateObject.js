import { useState } from "react";

// components
import ErrorExample from "./ErrorExample";

import classes from "./UseStateObject.module.css";
const UseStateObject = () => {
  return (
    <div className={classes.container}>
      <h1 className={classes.tutorialName}>USESTATE</h1>
      <ErrorExample />
    </div>
  );
};
export default UseStateObject;
