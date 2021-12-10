import { useState } from "react";
import List from "./List";
import classes from "./PropDrilling.module.css";
const data = [
  { id: 1, name: "USER1" },
  { id: 2, name: "USER2" },
  { id: 3, name: "USER3" },
  { id: 4, name: "USER4" },
  { id: 5, name: "USER5" },
];
const PropDrilling = () => {
  const [people, setPeople] = useState(data);
  // below is prop drilling
  const removePerson = (id) => {
    setPeople((prevPeople) => prevPeople.filter((person) => person.id !== id));
  };
  console.log(people);
  return (
    <section className={classes.container}>
      <h1 className={classes.title}>PROP DRILLING</h1>
      <section className={classes.container}>
        <List people={people} removePerson={removePerson} />
      </section>
    </section>
  );
};
export default PropDrilling;
