import { useReducer, useState, useRef, useEffect } from "react";
import classes from "./UseReducer.module.css";

/////////////////////////////////////
// /COMPONENTS
const Modal = ({ content, onClick }) => {
  // setTimeout(() => onClick(), 3000);
  useEffect(() => {
    setTimeout(() => {
      onClick(); /// closing the modal funct from the parent component()
    }, 2000);
  });
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>{content}</h1>
      <button onClick={() => onClick()}>X</button>
    </div>
  );
};
/////////////////////////////////////

const data = [{ id: 1, name: "dummy1" }];
// usually u have to move reducer into separate files
// cause it has many functionalities
// import { reducer } from "./helpers";
const reducer = (state, action) => {
  //   console.log(state, action);
  // this is where we deal with our state
  //   console.log(state);
  if (action.type === "ADD_ITEM") {
    const newItems = [...state.people, action.payload];
    // console.log(state);
    return {
      ...state, // copy the oldeer value
      people: newItems, // replacing the older value
      isModelOpen: true,
      modalContent: "ITEM ADDED",
    };
  } else if (action.type === "NO_VALUE") {
    return {
      ...state,
      isModelOpen: true,
      modalContent: "INPUT A VALUE, IT IS EMPTY",
    };
  } else if (action.type === "CLOSE_MODAL") {
    return {
      ...state,
      isModelOpen: false,
      modalContent: "",
    };
  } else if (action.type === "REMOVE_ITEM") {
    const newItems = state.people.filter(
      (person) => person.id !== action.payload // id we got from the clicking
    );
    return {
      ...state,
      people: newItems,
      isModelOpen: true,
      modalContent: `id ${action.payload} REMOVED`,
    };
  }
  throw new Error("NO MATCHING ACTION TYPE");
  // return the state
  //   return state;
};
const defaultState = {
  people: [],
  isModelOpen: false,
  modalContent: "",
};
const UseReducer = () => {
  // use STATE WAY
  const [people, setPeople] = useState(data);
  const [name, setName] = useState("");
  const [showModal, setShowModal] = useState(false);

  // use REDUCER WAY
  const [state, dispatch] = useReducer(reducer, defaultState);

  // ref for form
  const nameRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    setShowModal(() => true);
    if (nameRef.current.value) {
      //   setName(() => nameRef.current.value);
      //   setPeople((prevPeople) => [
      //     ...prevPeople,
      //     { id: new Date().getTime().toString(), name: nameRef.current.value },
      //   ]);

      // USE REDUCER WAY
      const newItem = {
        id: new Date().getTime().toString(),
        name: nameRef.current.value,
      };
      dispatch({ type: "ADD_ITEM", payload: newItem });
    } else {
      dispatch({ type: "NO_VALUE" }); // empty input
    }
    // console.log(name);
    // return;
  };
  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };
  // const modal = (content) => {
  //   return (
  //     <div className={classes.container}>
  //       <h1 className={classes.title}>{content}</h1>
  //       <button onClick={closeModal}>X</button>
  //     </div>
  //   );
  // };
  console.log(name);
  console.log(state);
  return (
    <section className={classes.container}>
      {/* {showModal && modal} */}
      {/* {state.isModelOpen && modal(state.modalContent)} */}
      {state.isModelOpen && (
        <Modal onClick={closeModal} content={state.modalContent} />
      )}
      <h1 className={classes.title}>USE REDUCER</h1>
      <div className={classes.container}>
        <form className={classes.container} onSubmit={submitHandler}>
          <input type="text" ref={nameRef} />
          <button>SUBMIT</button>
        </form>
      </div>
      <div className={classes.container}>
        {state.people.map((people) => (
          <div key={people.id} className={classes.container}>
            <h1 className={classes.title}>{people.name}</h1>
            <button
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payload: people.id })
              }
            >
              X
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};
export default UseReducer;
