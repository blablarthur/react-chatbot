import {
  help, callApiRandomStarWarsCharacter, force, callApiRandomRickCharacter, morty
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
    case '/whoami':
      break;
    case '/2001apicall':
      break;
    default:
      break;
  }
};

export default parseMessage;
