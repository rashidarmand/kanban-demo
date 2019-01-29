import React, { Component } from 'react';

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
      <div>
        <h1>Kanban</h1>
        {boards.map(board => board.name)}
      </div>
    )
  }
}