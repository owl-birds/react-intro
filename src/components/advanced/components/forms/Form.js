import { useEffect, useRef, useState } from "react";
import classes from "./Form.module.css";
const Form = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const testRef = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const [inputedUser, setInputedUser] = useState([]);
  const submitHandler = (event) => {
    event.preventDefault();
    if (!nameRef.current.value || !emailRef.current.value) {
      return;
    }
    // event.preventDefault(); // to prevent the submit
    setName(() => nameRef.current.value);
    setEmail(() => emailRef.current.value);
    const user = {
      id: new Date().getTime().toString(),
      name: nameRef.current.value,
      email: emailRef.current.value,
    };
    setInputedUser((prevUsers) => [...prevUsers, user]);
    // setInputedUser((prevUsers) => prevUsers.concat(user));
  };
  console.log(inputedUser);
  useEffect(() => {
    console.log(testRef.current);
    testRef.current.focus();
  });
  return (
    <article className={classes.container}>
      <h1 className={classes.title}>FORMS</h1>
      <section className={classes.container}>
        <form className={classes.container} onSubmit={submitHandler}>
          <div className={classes.formDiv}>
            <label htmlFor="name">name : </label>
            <input type="text" id="name" ref={nameRef} />
          </div>
          <div className={classes.formDiv}>
            <label htmlFor="email">email : </label>
            <input type="email" id="email" ref={emailRef} />
          </div>
          {/* <div className={classes.formDiv}>
            <label htmlFor="age">age : </label>
            <input
              min="1"
              type="number"
              id="age"
              value={age}
              onChange={(event) => setAge(event.target.value)}
            />
          </div> */}
          <div className={classes.formDiv}>
            <button>SUBMIT</button>
          </div>
        </form>
        <div className={classes.container}>
          <h1 className={classes.title}>ON CHANGE EX</h1>
          <div className={classes.formDiv}>
            <label htmlFor="age">age : </label>
            <input
              min="1"
              type="number"
              id="age"
              value={age}
              onChange={(event) => setAge(event.target.value)}
            />
          </div>
        </div>
      </section>
      <section className={classes.container}>
        <h1 className={classes.title}>name : {name}</h1>
        <h1 className={classes.title}>email : {email}</h1>
      </section>
      <section className={classes.container}>
        <h1 className={classes.title}>name : {name}</h1>
        <h1 className={classes.title}>email : {email}</h1>
        <h1 className={classes.title}>On Change</h1>
        <h1 className={classes.title} ref={testRef}>
          AGE : {age}
        </h1>
      </section>
      <section className={classes.container}>
        {inputedUser.map((user) => (
          <div key={user.id} className={classes.container}>
            <h1>{user.name}</h1>
            <h1>{user.email}</h1>
          </div>
        ))}
        {/* <h3 className={classes.title}>{testRef.current.value}</h3> */}
      </section>
    </article>
  );
};
export default Form;
