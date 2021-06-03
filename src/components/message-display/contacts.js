import React from 'react';
import { Col, Row } from 'react-bootstrap';

export const contactTypes = {
  USER: 'USER',
  BOT: 'BOT'
};

export const contacts = [
  {
    id: 'HUMAN1',
    name: 'Arthur',
    type: contactTypes.USER,
    img: 'https://i.pinimg.com/736x/d3/42/83/d342834c2b916d2f607a4144a34492e0.jpg',
    isInBotList: false
  },
  {
    id: 'BB1',
    name: 'BB-8',
    type: contactTypes.BOT,
    img: 'https://webstockreview.net/images/bb8-clipart-robot.png',
    isInBotList: true
  },
  {
    id: 'HAL1',
    name: 'HAL',
    type: contactTypes.BOT,
    img: 'https://dl2.macupdate.com/images/icons256/7669.png?d=1479658450',
    isInBotList: true
  },
  {
    id: 'RICK1',
    name: 'RICK',
    type: contactTypes.BOT,
    img: 'https://i.pinimg.com/originals/6e/51/32/6e5132a90812ad1abf3711135a5cf406.png',
    isInBotList: true
  },
  {
    id: 'MORTY1',
    name: 'MORTY',
    type: contactTypes.BOT,
    img: 'https://i.pinimg.com/originals/d2/33/6e/d2336eb516505c608035f832aafaa361.png',
    isInBotList: false
  },
  {
    id: 'ALLBOT',
    name: 'ALL BOT',
    type: contactTypes.BOT,
    img: 'https://dl2.macupdate.com/images/icons256/7669.png?d=1479658450',
    isInBotList: false
  }
];

export const findContactByName = (nameRef) => (
  contacts.find(({ name }) => name === nameRef)
);

export const Contact = ({ name, img }) => (
  <Row>
    <Col className="md-4">
      <div className="d-flex justify-content-start">
        <img src={img} className="img-thumbnail float-start" alt="..." width="60" heigth="60" />
      </div>
      <h2 className="text-start" color="orange">{name}</h2>
    </Col>
    {/*     <Col className="md-8">
      <h2 className="text-start" color="orange">{name}</h2>
    </Col> */}
  </Row>
);
