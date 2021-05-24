export const actionsType = {
  SEND_MESSAGE: 'SEND_MESSAGE',
  PARSE_MESSAGE: 'PARSE_MESSAGE'
};

export const sendMessage = (message, sender) => ({
  type: actionsType.SEND_MESSAGE,
  message,
  sender
});

export const parseMessage = (message) => ({
  type: actionsType.PARSE_MESSAGE,
  message
});
