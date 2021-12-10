import React, { useState, useContext } from "react";
import List from "./List";
import classes from "./UseContext.module.css";

// STORE :: CONTEXT
export const PersonContext = React.createContext({
  people: [],
  removePerson: () => {},
});
// 2 components ; Provider, consumer
//

const data = [
  { id: 1, name: "USER1" },
  { id: 2, name: "USER2" },
  { id: 3, name: "USER3" },
  { id: 4, name: "USER4" },
  { id: 5, name: "USER5" },
];
const UseContext = () => {
  const [people, setPeople] = useState(data);
  // below is prop drilling
  const removePerson = (id) => {
    setPeople((prevPeople) => prevPeople.filter((person) => person.id !== id));
  };
  const context = {
    people: people,
    removePerson: removePerson,
  };
  // console.log(people);
  // console.log(context);
  return (
    <PersonContext.Provider value={context}>
      <section className={classes.container}>
        <h1 className={classes.title}>USE CONTEXT</h1>
        <section className={classes.container}>
          {/* <List people={people} /> */}
          <List />
          {/* //removePerson={removePerson} /> */}
        </section>
      </section>
    </PersonContext.Provider>
  );
};
export default UseContext;
