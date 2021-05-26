import { actionsType } from './actions';
import { findContactByName } from './contacts';

const initalState = [{
  message: 'hello hmuan', id: Math.random() + 1, sender: findContactByName('BB-8'), timeSend: new Date()
}];

const addMessage = (action, state) => {
  const date = new Date();
  return [...state,
    {
      message: action.message, id: Math.random() + 1, sender: action.sender, timeSend: date
    }];
};

const messages = (state = initalState, action) => {
  switch (action.type) {
    case actionsType.SEND_MESSAGE:
      return addMessage(action, state);
    default:
      return state;
  }
};

export default messages;
