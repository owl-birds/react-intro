import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import classes from "./NestedRoute.module.css";
// for simplicity sake
// in real world u have to fetch the data again then
// find it based on the information u got from the url
const data = [
  { id: 1, name: "user1", age: 99 },
  { id: 2, name: "user2", age: 89 },
  { id: 3, name: "user3", age: 79 },
];
const PersonDetail = () => {
  // console.log(useParams());
  const param = parseInt(useParams().id); // cause /:id (param naming)
  const [person, setPerson] = useState({});
  //   const person = data.filter((d) => d.id === param);
  //   console.log(person);
  useEffect(() => {
    const newPerson = data.find((person) => person.id === param);
    setPerson(() => newPerson);
  }, []);
  console.log(person);
  return (
    <section className={classes.container}>
      <h1 className={classes.title}>{person.name}</h1>
      <h2 className={classes.title}>{person.age}</h2>
      <Link to="/nested-route/people" className={classes.link}>
        Back
      </Link>
    </section>
  );
};
export default PersonDetail;
