import { actionsType } from './actions';
import contactTypes from './contactTypes';

const initalState = [{ message: 'hello hmuan', id: Math.random() + 1, sender: contactTypes.BOT }];

const addMessage = (action, state) => ([...state,
  { message: action.message, id: Math.random() + 1, sender: action.sender }]);

const parseMessage = (action, state) => {
  console.log('dispatch correctly');
  switch (action.message) {
    case '/help':
      return addMessage({ message: 'here. you will be ok.', sender: contactTypes.BOT }, state);
    default:
      return state;
  }
};

const messages = (state = initalState, action) => {
  switch (action.type) {
    case actionsType.SEND_MESSAGE:
      return addMessage(action, state);
    case actionsType.PARSE_MESSAGE:
      return parseMessage(action, state);
    default:
      return state;
  }
};

export default messages;
