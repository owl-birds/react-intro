import { useState } from "react";
import classes from "./ErrorExample.module.css";

//
import { data } from "./dummyData";
//
const ErrorExample = () => {
  //   let title = "THIS IS A TITLE";
  //   console.log(useState);
  //   console.log(useState());
  // [value, setValue] setValue:the func to change the value

  //
  const [title, setTitle] = useState("A TITLE HERE");
  const [isChanged, setIsChanged] = useState(false);
  const [count, setCount] = useState(0);

  // array use case in useState
  const [tempData, setTempData] = useState(data);

  // object useState Ex
  const [person, setPerson] = useState({
    name: "Pigeon",
    age: 9,
    message: "THIS IS THE END",
  });
  const messageChange = () => {
    setPerson((prevPerson) => {
      // console.log(prevPerson);
      // prevPerson.message = "HELLO WORLD";
      prevPerson = { ...prevPerson, message: "HELLOOOOOO" };
      return prevPerson;
    });
    // setPerson({ message: "HELLOOOO" }); // DONT WORK THIS LLINE
    // setPerson({ ...person, message: "HELLOOOO" });
  };
  // console.log(title, isChanged);
  const clickHandler = () => {
    // alert(title);
    if (isChanged) {
      setTitle("A TITLE HERE");
      setIsChanged(!isChanged);
    } else {
      setTitle("HELLOOOOOO!!!!!!");
      setIsChanged(!isChanged);
    }
  };
  const removeOneHandler = (dataId) => {
    // const temp = tempData.filter((data) => data.id !== dataId);
    // console.log(temp);
    // its gacha below
    // setTempData(temp);
    setTempData((prevData) => {
      return prevData.filter((data) => data.id !== dataId);
    });
    // console.log(tempData);
  };
  const removeAllHandler = () => setTempData([]);

  const addOneSecDelay = () => {
    let a = 1;
    const timer = setInterval(() => {
      if (a <= 1) {
        clearInterval(timer);
      }
      // console.log(a);
      a -= 1;
      // setCount(count + 1);// this a synchronous function
      //
      setCount((prevCount) => {
        return prevCount + 1;
      }); // u get te current one
    }, 1000);
  };
  return (
    <div className={classes.container}>
      <h2 className={classes.title}>{title}</h2>
      <button onClick={clickHandler} className={classes.btn}>
        Change Title
      </button>
      {/* EXAMPLES */}
      <section className={classes.container}>
        {tempData.map((data) => (
          <div key={data.id} className={classes.box}>
            <h2 className={classes.boxTitle}>{data.name}</h2>
            <button onClick={() => removeOneHandler(data.id)}>x</button>
          </div>
        ))}
        <div>
          <button onClick={removeAllHandler}>X</button>
        </div>
      </section>
      {/* OBJECT EX */}
      <section className={classes.container}>
        <h2>{person.name}</h2>
        <h3>{person.age}</h3>
        <h3>{person.message}</h3>
        <div>
          <button onClick={messageChange}>Change Message</button>
        </div>
      </section>
      {/* NUMER EX */}
      <section className={classes.container}>
        <h1 style={{ fontSize: "3rem" }}>{count}</h1>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +1
        </button>
        <button onClick={addOneSecDelay}>+1 1Sec-delay</button>
      </section>
    </div>
  );
};
// let a = 10;
// const timer = setInterval(() => {
//   if (a <= 1) {
//     clearInterval(timer);
//   }
//   console.log(a);
//   a -= 1;
// }, 1000);
export default ErrorExample;
