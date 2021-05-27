import axios from 'axios';
import { findContactByName } from './contacts';
import { sendMessage, deleteMessage } from './actions';
import productMode from '../../store';

export const callApiRandomStarWarsCharacter = () => {
  const randomId = 1 + Math.floor(Math.random() * 81);

  const url = `https://swapi.dev/api/people/${randomId}/`;

  axios.get(url).then((response) => {
    const data = {
      eyeColor: response.data.eye_color,
      birthYear: response.data.birth_year,
      name: response.data.name
    };
    const message = `Hey ${data.name} ! You were born in ${data.birthYear} with beautiful ${data.eyeColor} eye. May the force be with you !`;
    productMode.dispatch(sendMessage(message, findContactByName('BB-8')));
  }).catch(() => {
    const message = "Weird. You don't correspond to any StarWars character. Maybe our machine is broken.";
    productMode.dispatch(sendMessage(message, findContactByName('BB-8')));
  });
};

export const callApiRandomRickCharacter = () => {
  const randomRickNumber = 1 + Math.floor(Math.random() * 19);
  const url = 'https://rickandmortyapi.com/api/character/?name=rick';

  axios.get(url).then((response) => {
    console.log(response);
    const choosenRick = response.data.results[randomRickNumber];
    const data = {
      name: choosenRick.name,
      species: choosenRick.species,
      location: choosenRick.location.name
    };
    console.log(choosenRick);
    const message = `You match with ${data.name} ! You live in ${data.location}. Your Rick is a ${data.species}.`;
    productMode.dispatch(sendMessage(message, findContactByName('RICK')));
  }).catch(() => {
    const message = 'Weird. We did not find any Rick for you.';
    productMode.dispatch(sendMessage(message, findContactByName('RICK')));
  });
};

export const morty = () => {
  const messageRick = "Morty is not here. And he's fine if his mother asks";
  productMode.dispatch(sendMessage(messageRick, findContactByName('RICK')));

  const messageMorty = "No I'm not fine ! Please help I'm gonna die because a plasma dinozaure grow in my belly ! HELP ME";
  productMode.dispatch(sendMessage(messageMorty, findContactByName('MORTY')));

  setTimeout(() => {
    productMode.dispatch(deleteMessage(messageMorty));
    const messageRick2 = 'Look at me. You. Heard. Nothing.';
    productMode.dispatch(sendMessage(messageRick2, findContactByName('RICK')));
  }, 6500);
};

export const callApiRandomActivity = (nbParticipants) => {
  const url = `https://www.boredapi.com/api/activity?participants=${nbParticipants}`;

  axios.get(url).then((response) => {
    console.log(response);
    const data = {
      name: response.data.activity,
      price: response.data.price,
      participants: response.data.participants,
      type: response.data.type
    };
    console.log(data);
    const message = `For ${data.participants} people, I advise you to do ${data.name} ! It is a ${data.type} activity ! From 0 to 1, it will cost you ${data.price}.`;
    productMode.dispatch(sendMessage(message, findContactByName('HAL')));
  }).catch(() => {
    const message = 'Weird. We did not find any activity for you.';
    productMode.dispatch(sendMessage(message, findContactByName('HAL')));
  });
};

export const halMovie = () => {
  const message = "I come from the famous movie 2001: A space odyssey. And if you're wondering, I won.";

  productMode.dispatch(sendMessage(message, findContactByName('HAL')));
};

export const help = () => {
  const message = `Hello comrade ! You can use several command for which we will grant you answers.
  Here is a list:
  - /help 
  - /starwarscharacter
  - /force
  - /activity [nbParticipants]
  - /halmovie
  - /whichrickami
  - /morty
  Enjoy !`;

  productMode.dispatch(sendMessage(message, findContactByName('ALL BOT')));
};

export const force = () => {
  const message = 'The force is strong in your family.';

  productMode.dispatch(sendMessage(message, findContactByName('BB-8')));
};
