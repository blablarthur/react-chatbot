export const actionsType = {
  SEARCH_EVENTS: 'SEARCH_EVENTS'
};

export const searchEvents = (data) => ({
  type: actionsType.SEARCH_EVENTS,
  data
});
