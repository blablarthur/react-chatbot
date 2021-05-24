import React from 'react';

import store from '../../store';
import { changeColorContact } from './actions';

const Button = ({ id }) => (
  <button
    type="button"
    onClick={() => store.dispatch(changeColorContact(id))}
  >
    Click me
  </button>
);

export default Button;
