import React, { useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container, Row, Col
} from 'react-bootstrap';
import { sendMessage } from './actions';
import { contactTypes, findContactByName } from './contacts';
import messagesSelector from './messageSelectors';
import parseMessage from './parsing';

const Hours = ({ date }) => {
  const dateRefactored = date.toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' });
  return (
    <div>
      <small className="form-text text-muted">
        {dateRefactored}
      </small>
    </div>
  );
};

const Messages = ({ messages }) => (
  <div>
    {messages.map(({
      message, id, sender, timeSend
    }) => {
      console.log(message + id);
      if (sender.type === contactTypes.USER) {
        return (
          <div key={id} className="d-flex justify-content-end">
            <div className="d-flex-column">
              <h5 className="text-left">{sender.name}</h5>
              <Hours date={timeSend} />
              <div className="d-flex">
                <p>{message}</p>
                <img src={sender.img} className="img-thumbnail" alt="..." height="20" width="20" />
              </div>
            </div>
          </div>
        );
      }
      return (
        <div key={id} className="d-flex justify-content-start">
          <div className="d-flex-column">
            <h5>{sender.name}</h5>
            <Hours date={timeSend} />
            <div className="d-flex">
              <img src={sender.img} className="img-thumbnail" alt="..." height="20" width="20" />
              <p>{message}</p>
            </div>
          </div>
        </div>
      );
    })}
  </div>
);

const MessageDisplay = ({ messages, toSendMessage }) => {
  const textInput = useRef(null);

  const handleClick = (event) => {
    if (event.key === 'Enter') {
      const { value } = textInput.current;
      if (value !== '') {
        toSendMessage(value);
        parseMessage(value);
        textInput.current.value = '';
      }
    }
  };

  return (
    <Container>
      <Row className="md-10">
        <Col>
          <div className="media">
            <div className="media-body">
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
  const messages = useSelector(messagesSelector);
  const dispatch = useDispatch();
  const toSendMessage = useCallback((message) => (
    dispatch(sendMessage(message, findContactByName('Arthur')))
  ), []);
  return (
    <MessageDisplay
      toSendMessage={toSendMessage}
      messages={messages}
    />
  );
};

export default MessageDisplayStore;
