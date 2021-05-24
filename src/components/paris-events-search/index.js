import React, { Component, createRef } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import {
  Button,
  Card,
  Col,
  Container,
  Form,
  FormControl,
  Navbar,
  Row
} from 'react-bootstrap';

import { searchEvents } from './actions';

const EventsList = ({ data }) => (
  <Container className="mt-5">
    <Row>
      {data.map((event) => (
        <Col>
          <Card>
            <Card.Img variant="top" src={event.coverUrl} />
            <Card.Body>
              <Card.Title>{event.title}</Card.Title>
              <Card.Text>{event.contactName}</Card.Text>
              <Button variant="primary">See event</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

const ParisEventsSearch = class ParisEventsSearch extends Component {
  constructor() {
    super();

    this.textInput = createRef();

    const state = {
      inputValue: ''
    };

    this.handleClick = this.handleClick.bind(this);
    this.state = state;
  }

  handleClick(e) {
    e.preventDefault();

    const { value } = this.textInput.current;

    this.setState({
      inputValue: value
    });

    this.callApi();
  }

  callApi() {
    const { inputValue } = this.state;
    const { dispatch } = this.props;

    const url = `https://opendata.paris.fr/api/records/1.0/search/?dataset=que-faire-a-paris-&q=${inputValue}`;

    axios.get(url).then((response) => {
      const data = response.data.records.map((event) => ({
        contactName: event.fields.contact_name,
        title: event.fields.title,
        coverUrl: event.fields.cover_url,
        addressStreet: event.fields.address_street,
        addressZipcode: event.fields.address_zipcode
      }));

      dispatch(searchEvents(data));
    }).catch(() => {
      dispatch(searchEvents([]));
    });
  }

  render() {
    const { data } = this.props;

    return (
      <div>
        <Navbar bg="danger" expand="sm">
          <Navbar.Brand href="#home">Paris Events</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Form inline className="ml-auto">
              <FormControl ref={this.textInput} type="text" placeholder="Search" className="mr-sm-2" />
              <Button onKeyPress={(e) => e.preventDefault()} variant="dark" onClick={this.handleClick}>Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
        <EventsList data={data} />
      </div>
    );
  }
};

const mapToProps = (store) => ({
  data: store.dataSearch
});

export default connect(mapToProps)(ParisEventsSearch);
