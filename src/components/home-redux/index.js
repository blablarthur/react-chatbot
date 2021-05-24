import React from 'react';
import { connect } from 'react-redux';

import Button from './button';

const Contact = ({ item, id }) => {
  const { name, age, checked } = item;
  const changeColor = !checked ? 'black' : 'red';

  return (
    <li style={{ color: changeColor }}>
      {`name: ${name} | age: ${age}`}
      <Button id={id} />
    </li>
  );
};

const HomeRedux = ({ data }) => (
  <ul>
    {data.map((item, id) => (<Contact id={id} item={item} />))}
  </ul>
);

const mapTopProps = (store) => ({ data: store.data });

export default connect(mapTopProps)(HomeRedux);
