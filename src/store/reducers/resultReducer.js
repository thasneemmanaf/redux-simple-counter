const initialState = {
  results: [],
};

const resultReducer = (state = initialState, action) => {
  if (action.type === "SAVE_RESULT") {
    return {
      ...state,
      results: state.results.concat({
        id: JSON.stringify(new Date()),
        value: action.payload,
      }),
    };
  } else if (action.type === "DELETE") {
    const newResults = state.results.filter((rslt) => {
      return rslt.id !== action.payload;
    });

    return {
      ...state,
      results: newResults,
    };
  } else {
    return state;
  }
};

export default resultReducer;
