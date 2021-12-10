import classes from "./NestedRoute.module.css";
import Person from "./Person";
const data = [
  { id: 1, name: "user1", age: 99 },
  { id: 2, name: "user2", age: 89 },
  { id: 3, name: "user3", age: 79 },
];
const PersonList = () => {
  return (
    <section className={classes.container}>
      {data.map((person) => (
        <Person key={person.id} {...person} />
      ))}
    </section>
  );
};

export default PersonList;
