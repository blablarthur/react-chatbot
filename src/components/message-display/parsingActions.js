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
    const choosenRick = response.data.results[randomRickNumber];
    const data = {
      name: choosenRick.name,
      species: choosenRick.species,
      location: choosenRick.location.name
    };
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
    const data = {
      name: response.data.activity,
      price: response.data.price,
      participants: response.data.participants,
      type: response.data.type
    };
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
  const messageBB8 = `Hello there again ! You wonder what StarWars Character you look like ? Type /starwarscharacter !
  Use the /force command to be more powerful ! Enjoy !`;

  productMode.dispatch(sendMessage(messageBB8, findContactByName('BB-8')));

  const messageHAL = `Hey ! I can provide you activities if you feel bored. For that use the /activity [nbParticipants] command.
  Also, if you wonder from which movie I come from, type /halmovie`;

  productMode.dispatch(sendMessage(messageHAL, findContactByName('HAL')));

  const messageRICK = `*Burrrp* oh. Use the dumb command /whichrickami to be a super cool dumb human.
  It's was morty idea. Oh, also you can call /morty if you want but we're going to be busy so wait a little. MORTY pack your things we're going on some hunting !`;

  productMode.dispatch(sendMessage(messageRICK, findContactByName('RICK')));
};

export const force = () => {
  setTimeout(() => {
    const message2 = 'Wow ! Have you seen that ! Was it my powers or .. ?';
    productMode.dispatch(sendMessage(message2, findContactByName('BB-8')));
  }, 3000);
};
