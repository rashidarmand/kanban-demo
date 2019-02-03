import React, { Component, Fragment } from 'react';
import starterBoards from '../utils/_data';
import { makeCard, makeBoard } from '../utils/helpers';
import Board from './Board';

export default class App extends Component {
  state = {
    boards: starterBoards
  }

  addBoard = () => {
    const title = window.prompt('Please enter new board title');
    const newBoard = makeBoard(title);
    this.setState(prevState => ({
      boards: [
        ...prevState.boards,
        newBoard
      ]
    }));
  }

  deleteBoard = (id) => {
    const updatedBoardList = [...this.state.boards]
      .filter(board => board.id !== id);
    this.setState({ boards : updatedBoardList })
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

  changeBoard = (boardId, cardId, direction) => {
    const { boards } = this.state;
    const updatedBoards = [...boards];
    const initBoardIndex = updatedBoards.findIndex(board => board.id === boardId);
    const adjacentBoard = direction === '⬅️' ? initBoardIndex - 1 : initBoardIndex + 1;
    const cardBeingMoved = updatedBoards
      .find(board => board.id === boardId)
      .cards.find(card => card.id === cardId)
    // Remove card from init board & add card to adjacent board
    updatedBoards.map((board, i) => {
      if(i === initBoardIndex) board.cards = board.cards.filter(card => card !== cardBeingMoved);
      if(i === adjacentBoard) board.cards = board.cards.concat([cardBeingMoved])
      return board;
    })

    this.setState({ boards : updatedBoards })
  }


  render() {
    const { boards } = this.state;

    return (
      <Fragment>
        <div>
          <h1 style={h1Style}>Kanban Board Practice</h1>
          <button className="btn" onClick={ this.addBoard }>Add New Board</button>
        </div>
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
              changeBoard={ this.changeBoard }
              deleteBoard={ this.deleteBoard }
            />
          ))}
        </div>
      </Fragment>
    )
  }
}

const h1Style = {
  textAlign: 'center',
  textDecoration: 'underline'
}

/*
  @TODO
    1) delete boards
    2) Edit, delete cards
    3) Store state of application in local storage so it is still there on refreshing
*/
