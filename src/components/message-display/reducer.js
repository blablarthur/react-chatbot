import { actionsType } from './actions';
import { findContactByName } from './contacts';

const initalState = [{
  message: `aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
  aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa`,
  id: Math.random() + 1,
  sender: findContactByName('ALL BOT'),
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
