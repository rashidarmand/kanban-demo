import uuidv4 from 'uuid/v4';

const demoCards = [
  {
    id: uuidv4(),
    text: 'Demo Card 1',
  },
  {
    id: uuidv4(),
    text: 'Demo Card 2'
  }
];

export const starterBoards = [
  {
    id: uuidv4(),
    name: 'Winnie',
    color: '#8E6E95',
    cards: demoCards
  },
  {
    id: uuidv4(),
    name: 'Bob',
    color: '#35A95C',
    cards: demoCards
  },
  {
    id: uuidv4(),
    name: 'Thomas',
    color: '#344759',
    cards: demoCards
  },
  {
    id: uuidv4(),
    name: 'George',
    color: '#E8741E',
    cards: demoCards
  }
]