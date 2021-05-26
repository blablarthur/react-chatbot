import { help, callApiRandomStarWarsCharacter, sarahconnor } from './parsingActions';

const parseMessage = (message) => {
  console.log('dispatch correctly');
  switch (message) {
    case '/help':
      help();
      break;
    case '/force':
      break;
    case '/starwarscharacter':
      callApiRandomStarWarsCharacter();
      break;
    case '/sarahconnor':
      sarahconnor();
      break;
    case '/terminatormovie':
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
