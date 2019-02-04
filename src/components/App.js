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
      boards: [...prevState.boards, newBoard]
    }));
  }

  editBoard = (id, newName) => {
    const updatedBoardList = [...this.state.boards]
      .map(board => {
        if(board.id === id) board.name = newName;
        return board;
      });

    this.setState({ boards: updatedBoardList });
  }

  deleteBoard = (id) => {
    const updatedBoardList = [...this.state.boards]
      .filter(board => board.id !== id);

    this.setState({ boards : updatedBoardList })
  }

  changeBoard = (boardId, cardId, direction) => {
    const prevBoardList = [...this.state.boards];
    const initBoardIndex = prevBoardList.findIndex(board => board.id === boardId);
    const adjacentBoard = direction === '⬅️' ? initBoardIndex - 1 : initBoardIndex + 1;
    const cardBeingMoved = prevBoardList[initBoardIndex]
      .cards.find(card => card.id === cardId);
    const updatedBoardList = prevBoardList
      .map((board, i) => {
        // remove card from init board
        if(i === initBoardIndex) board.cards = board.cards.filter(card => card !== cardBeingMoved);
        // add card to adjacent board
        if(i === adjacentBoard) board.cards = board.cards.concat([cardBeingMoved])
        return board;
      });

    this.setState({ boards : updatedBoardList })
  }

  addCard = (id, text) => {
    const newCard = makeCard(text);
    const updatedBoardList = [...this.state.boards]
      .map(board => {
        if(board.id === id) board.cards = [...board.cards, newCard];
        return board
      });

    this.setState({ boards: updatedBoardList });
  }

  editCard = (boardId, cardId, text) => {
    const initBoard = [...this.state.boards]
      .find(board => board.id === boardId)
      .cards.map(card => {
        if(card.id === cardId) card.text = text;
        return card;
      });
    const updatedBoardList = [...this.state.boards]
      .map(board => board.id === initBoard.id ? initBoard : board);

    this.setState({ boards: updatedBoardList });
  }

  deleteCard = (boardId, cardId) => {
    const initBoard = [...this.state.boards].find(board => board.id === boardId);
    initBoard.cards = initBoard.cards.filter(card => card.id !== cardId);
    const updatedBoardList = [...this.state.boards]
      .map(board => board.id === initBoard.id ? initBoard : board);
      
    this.setState({ boards: updatedBoardList });
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
              {...board}
              firstBoard={ i === 0 }
              lastBoard={ boards.length - 1 === i }
              addCard={ this.addCard }
              editCard={ this.editCard }
              deleteCard={ this.deleteCard }
              editBoard={ this.editBoard }
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
