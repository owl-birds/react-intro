import { useContext } from "react";
import { PersonContext } from "./UseContext";
import classes from "./UseContext.module.css";
const List = ({ removePerson }) => {
  const mainContext = useContext(PersonContext);
  console.log(mainContext);
  return (
    <>
      {mainContext.people.map((person) => (
        <Person
          key={person.id}
          //   id={person.id}
          //   name={person.name}
          {...person}
          // removePerson={removePerson}
        />
      ))}
    </>
  );
};
const Person = ({ id, name, removePerson }) => {
  // USE CONTEXT
  const personContext = useContext(PersonContext);
  // console.log(personContext);
  // PROP DRILLING HERE
  const removeHandler = () => {
    // removePerson(id);
    personContext.removePerson(id);
  };
  return (
    <>
      <div className={classes.container}>
        <h1 className={classes.title}>{name}</h1>
        <button onClick={removeHandler}>X</button>
      </div>
    </>
  );
};
export default List;
