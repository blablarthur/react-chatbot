import { actionsType } from './actions';

const initalState = [];

const searchEvent = (action) => {
  const newState = [...action.data];

  return newState;
};

const data = (state = initalState, action) => {
  switch (action.type) {
    case actionsType.SEARCH_EVENTS:
      return searchEvent(action);
    default:
      return state;
  }
};

export default data;
