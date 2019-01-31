import uuidv4 from 'uuid/v4';

export const makeCard = (text) => ({
  id: uuidv4(),
  text
})