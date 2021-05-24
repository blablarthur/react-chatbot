import React, { useCallback, useRef } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import {
  Container, Row, Col
} from 'react-bootstrap';
import { sendMessage, parseMessage } from './actions';
import contactTypes from './contactTypes';
import { messageSelector } from './messageSelectors';

const Hours = () => {
  const today = new Date();
  const date = today.toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' });
  return (
    <div>
      <small className="form-text text-muted">
        {date}
      </small>
    </div>
  );
};

const Messages = ({ messages }) => (
  <div>
    {messages.map(({ message, id, sender }) => {
      console.log(message + id);
      if (sender === contactTypes.USER) {
        return (
          <div key={id} className="d-flex justify-content-end">
            <div className="d-flex-column">
              <Hours />
              <p>{message}</p>
            </div>
          </div>
        );
      }
      return (
        <div key={id} className="d-flex-column justify-content-start">
          <Hours />
          <p>{message}</p>
        </div>
      );
    })}
  </div>
);

const MessageDisplay = ({ messages, dispatch }) => {
  const textInput = useRef(null);

  const handleClick = (event) => {
    if (event.key === 'Enter') {
      const { value } = textInput.current;
      if (value !== '') {
        dispatch(sendMessage(value, contactTypes.USER));
        dispatch(parseMessage(value));
        textInput.current.value = '';
      }
    }
  };

  return (
    <Container>
      <Row className="md-10">
        <Col>
          <div className="media">
            <div className="media-left">
              <img src="https://www.pinterest.com/pin/726486983620498106/" className="media-object" alt="..." />
            </div>
            <div className="media-body">
              <h4 className="media-heading">John Doe</h4>
              <Messages messages={messages} />
            </div>
          </div>
        </Col>
      </Row>
      <Row className="md-2">
        <input
          ref={textInput}
          type="text"
          className="form-control"
          onKeyPress={handleClick}
        />
      </Row>
    </Container>
  );
};

const MessageDisplayStore = () => {
  const messagesSelector = useSelector(messageSelector);
  const dispatch = useDispatch();
  const toSendMessage = useCallback((message) => (
    dispatch(sendMessage(message, contactTypes.USER))
  ), []);

}

const mapToProps = (state) => ({
  messages: state.messages
});

export default connect(mapToProps)(MessageDisplay);
