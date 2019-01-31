import React, { Component } from 'react';
import { starterBoards } from '../utils/_data';
import Board from './Board';

export default class App extends Component {
  state = {
    boards: starterBoards
  }
  render() {
    const { boards } = this.state;

    return (
      <div className='kanban'>
        {boards.map((board, i) => (
          <Board
            key={ board.id } 
            name={ board.name }
            color={ board.color }
            cards={ board.cards }
            firstBoard={ i === 0 }
            lastBoard={ boards.length - 1 === i }
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
