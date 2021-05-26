import axios from 'axios';
import { findContactByName } from './contacts';
import { sendMessage } from './actions';
import productMode from '../../store';

export const callApiRandomStarWarsCharacter = () => {
  const randomId = 1 + Math.floor(Math.random() * 81);
  console.log(randomId);

  const url = `https://swapi.dev/api/people/${randomId}/`;

  axios.get(url).then((response) => {
    console.log(response);
    const data = {
      eyeColor: response.data.eye_color,
      birthYear: response.data.birth_year,
      name: response.data.name
    };
    console.log(data);
    const message = `Hey ${data.name} ! You were born in ${data.birthYear} with beautiful ${data.eyeColor} eye. May the force be with you !`;
    productMode.dispatch(sendMessage(message, findContactByName('BB-8')));
  }).catch(() => {
    const message = "Weird. You don't correspond to any StarWars character. Maybe our machine is broken.";
    productMode.dispatch(sendMessage(message, findContactByName('BB-8')));
  });
};

export const help = () => {
  const message = `Hello comrade ! You can use several command for which we will grant you answers. Here is a list:
  - /help (obviously)
  - /starwarscharacter
  - /force
  - /sarahconnor
  - /terminatormovie
  - /whoami
  - /2001apicall
  Enjoy !`;

  productMode.dispatch(sendMessage(message, findContactByName('ALL BOT')));
};

export const sarahconnor = () => {
  const message = 'Sarah Connor ?';

  productMode.dispatch(sendMessage(message, findContactByName('TERMINATOR')));
};
