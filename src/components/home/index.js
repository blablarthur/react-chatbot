import React from 'react';
import {
  Card,
  Col, Container, ListGroup, ListGroupItem, Row
} from 'react-bootstrap';

import MessageDisplay from '../message-display/index';

const Home = () => (
  <Container className="md">
    <Row>
      <Col className="md-2">
        <ListGroup>
          <ListGroupItem>
            <img src="https://clipground.com/images/robot-icon-clipart.jpg" alt="..." width="60" heigth="60" />
            Terminator
          </ListGroupItem>
          <ListGroupItem>
            BB06
          </ListGroupItem>
          <ListGroupItem>
            Roger
          </ListGroupItem>
        </ListGroup>
      </Col>
      <Col className="md-10">
        <Card className="lg">
          <MessageDisplay />
        </Card>
      </Col>
    </Row>
  </Container>
);

export default Home;
