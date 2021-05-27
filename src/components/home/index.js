import React from 'react';
import {
  Card,
  Col, Container, ListGroup, ListGroupItem, Row
} from 'react-bootstrap';

import MessageDisplayStore from '../message-display/index';
import { contacts, Contact } from '../message-display/contacts';

const Home = () => (
  <Container className="md mt-4">
    <Row>
      <Col className="sm-4">
        <ListGroup>
          {contacts
            .filter(({ isInBotList }) => (
              isInBotList
            ))
            .map(({ name, id, img }) => {
              console.log(name);
              return (
                <ListGroupItem key={id}>
                  <Contact name={name} img={img} />
                </ListGroupItem>
              );
            })}
        </ListGroup>
      </Col>
      <Col className="sm-8">
        <Card className="md" style={{ width: '48rem' }}>
          <MessageDisplayStore />
        </Card>
      </Col>
    </Row>
  </Container>
);

export default Home;
