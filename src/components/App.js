import React, { Component } from 'react';
import { starterBoards } from '../utils/_data';
import { makeCard } from '../utils/helpers';
import Board from './Board';

export default class App extends Component {
  state = {
    boards: starterBoards
  }

  addCard = (id, text) => {
    const newCard = makeCard(text);
    this.setState(prevState => ({
      boards: prevState.boards.map(board => {
        if(board.id === id) board.cards = board.cards.concat([newCard])
        return board
      })
    }));
  }

  changeBoard = (id, direction) => {
    // Check which direction was clicked.
    // Use id to find which board initated click, 
    // remove card from there, 
    // then find adjacent board based on direction and add card to that one
  }


  render() {
    const { boards } = this.state;

    return (
      <div className='kanban'>
        {boards.map((board, i) => (
          <Board
            key={ board.id } 
            id={ board.id }
            name={ board.name }
            color={ board.color }
            cards={ board.cards }
            addCard={ this.addCard }
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
