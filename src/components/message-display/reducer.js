import { actionsType } from './actions';
import { findContactByName } from './contacts';

const initalState = [{
  message: 'Hello there ! Use the /help command to get more informations about what we can do for you !',
  id: Math.random() + 1,
  sender: findContactByName('BB-8'),
  timeSend: new Date()
}];

const addMessage = (action, state) => {
  const date = new Date();
  return [...state,
    {
      message: action.message, id: Math.random() + 1, sender: action.sender, timeSend: date
    }];
};

const deleteMessage = (action, state) => {
  const newState = state.filter((message) => (
    message.message !== action.message
  ));
  return newState;
};

const messages = (state = initalState, action) => {
  switch (action.type) {
    case actionsType.SEND_MESSAGE:
      return addMessage(action, state);
    case actionsType.DELETE_MESSAGE:
      return deleteMessage(action, state);
    default:
      return state;
  }
};

export default messages;
