import React, { Component } from 'react';
import Board from './Board';

const demoCards = ['Demo Card 1', 'Demo Card 2'];

export default class App extends Component {
  state = {
    boards: [
      {
        name: 'Winnie',
        color: '#8E6E95',
        cards: demoCards
      },
      {
        name: 'Bob',
        color: '#35A95C',
        cards: demoCards
      },
      {
        name: 'Thomas',
        color: '#344759',
        cards: demoCards
      },
      {
        name: 'George',
        color: '#E8741E',
        cards: demoCards
      }
    ]
  }
  render() {
    const { boards } = this.state;

    return (
      <div className='kanban'>
        {boards.map(board => (
          <Board 
            name={ board.name }
            color={ board.color }
            cards={ board.cards }
          />
        ))}
      </div>
    )
  }
}

/*
  @TODO
    1) Board Component
    2) Card Component
    3) Styling
    4) Add new card
    5) Switch board

  @BONUS
    6) Add new boards, delete boards
    7) Edit, delete cards
    8) Store state of application in local storage so it is still there on refreshing
*/
