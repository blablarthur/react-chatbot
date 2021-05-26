export const actionsType = {
  SEND_MESSAGE: 'SEND_MESSAGE',
  DELETE_MESSAGE: 'DELETE_MESSAGE'
};

export const sendMessage = (message, sender) => ({
  type: actionsType.SEND_MESSAGE,
  message,
  sender
});

export const deleteMessage = (message, sender) => ({
  type: actionsType.DELETE_MESSAGE,
  message,
  sender
});
