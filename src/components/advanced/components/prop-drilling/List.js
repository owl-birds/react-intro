import classes from "./PropDrilling.module.css";
const List = ({ people, removePerson }) => {
  return (
    <>
      {people.map((person) => (
        <Person
          key={person.id}
          //   id={person.id}
          //   name={person.name}
          {...person}
          removePerson={removePerson}
        />
      ))}
    </>
  );
};
const Person = ({ id, name, removePerson }) => {
  const removeHandler = () => {
    removePerson(id);
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
