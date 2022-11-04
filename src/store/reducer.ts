const defaultState: {
  num: number;
} = {
  num: 20,
};

const reducer = (state = defaultState) => {
  let newState = JSON.parse(JSON.stringify(state));
  return newState;
};

export default reducer;
