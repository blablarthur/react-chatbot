import React, { useCallback, useRef, useEffect } from 'react';
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
          <li className="media" key={id}>
            <div className="media-body w-75">
              <h5 className="mt-0 mb-1 text-right">{sender.name}</h5>
              <p className="text-right">{message}</p>
            </div>
            <div className="ml-2">
              <Hours date={timeSend} />
            </div>
            <img className="align-self-center ml-2" src={sender.img} alt="..." height="30" width="30" />
          </li>
        );
      }
      return (
        <li className="media" key={id}>
          <img className="align-self-center mr-2" src={sender.img} alt="..." height="30" width="30" />
          <div className="mr-2">
            <Hours date={timeSend} />
          </div>
          <div className="media-body w-75">
            <h5 className="mt-0 mb-1">{sender.name}</h5>
            <div className="p-3">{message}</div>
          </div>
        </li>
      );
    })}
  </div>
);

const MessageDisplay = ({ messages, toSendMessage }) => {
  const textInput = useRef(null);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendAndParse = () => {
    const { value } = textInput.current;
    if (value !== '') {
      toSendMessage(value);
      parseMessage(value);
      textInput.current.value = '';
    }
  };

  const handleInput = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      sendAndParse();
    }
  };

  const handleClick = () => {
    sendAndParse();
  };

  return (
    <Container>
      <Row>
        <Col>
          <ul className="list-unstyled" style={{ overflowY: 'scroll', height: '400px' }}>
            <Messages messages={messages} />
            <div ref={messagesEndRef} />
          </ul>
        </Col>
      </Row>
      <Row>
        <div className="input-group">
          <input
            ref={textInput}
            type="text"
            className="form-control"
            onKeyPress={handleInput}
          />
          <div className="input-group-append">
            <button className="btn btn-primary" type="button" onClick={handleClick}>
              Send
            </button>
          </div>
        </div>
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
