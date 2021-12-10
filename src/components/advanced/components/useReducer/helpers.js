export const reducer = (state, action) => {
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
