import {
  help, callApiRandomStarWarsCharacter, force, callApiRandomRickCharacter, morty,
  callApiRandomActivity,
  halMovie
} from './parsingActions';

const parseMessage = (message) => {
  const separateMsg = message.split(' ');
  switch (separateMsg[0]) {
    case '/help':
      help();
      break;
    case '/force':
      force();
      break;
    case '/starwarscharacter':
      callApiRandomStarWarsCharacter();
      break;
    case '/whichrickami':
      callApiRandomRickCharacter();
      break;
    case '/morty':
      morty();
      break;
    case '/halmovie':
      halMovie();
      break;
    case '/activity':
      if (separateMsg.length === 2) {
        callApiRandomActivity(separateMsg[1]);
      }
      break;
    default:
      break;
  }
};

export default parseMessage;
