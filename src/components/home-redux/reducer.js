import { actionsType } from './actions';

const initalState = [{
  name: 'Cyril Vimard',
  age: 33,
  checked: false
}, {
  name: 'David Dubois',
  age: 25,
  checked: false
}, {
  name: 'Marie Hello',
  age: 22,
  checked: false
}];

const changeColorContact = (state, action) => {
  const stateUpdated = [...state];

  stateUpdated[action.id].checked = !stateUpdated[action.id].checked;

  return stateUpdated;
};

const data = (state = initalState, action) => {
  switch (action.type) {
    case actionsType.CHANGE_COLOR_CONTACT:
      return changeColorContact(state, action);
    default:
      return state;
  }
};

export default data;
