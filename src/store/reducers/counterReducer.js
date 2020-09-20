const initialState = {
  counter: 0,
};

const counterReducer = (state = initialState, action) => {
  if (action.type === "INCREMENT") {
    //   option 1: to change the state immutably
    const newState = Object.assign({}, state); // create a copy of state-immutably
    newState.counter = state.counter + 1;
    return newState;
  } else if (action.type === "DECREMENT") {
    //   option 2: to change the state immutably
    return {
      ...state,
      counter: state.counter - 1,
    };
  } else if (action.type === "ADD_5") {
    return {
      ...state,
      counter: state.counter + action.payload,
    };
  } else if (action.type === "SUB_5") {
    return {
      ...state,
      counter: state.counter - action.payload,
    };
  } else {
    return state;
  }
};

export default counterReducer;
