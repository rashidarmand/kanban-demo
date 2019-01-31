import React, { Component } from 'react';
import Card from './Card';
import { GoKebabVertical } from "react-icons/go";

export default class Board extends Component {
  state = {
    newCardText: '',
    id: this.props.id
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { newCardText, id } = this.state
    this.props.addCard(id, newCardText);
    this.setState({ newCardText: '' })
  }

  render() {
    const { name, color, cards, firstBoard, lastBoard, changeBoard } = this.props;
    const { newCardText, id } = this.state;

    return (
      <div className='boards'>
        <h2 className='board-title' style={{ background: color }}>
          { name } 
          <div className='tooltip'>
            <GoKebabVertical className='menu-options' />
            <span className="tooltip-text">
              {/* 
                @TODO
                  1) Add buttons here for delete / edit board
                  2) Add click handlers to take care of it
                  3) Decide on edit / delete cards.
                  // Idea *
                    - have the button to edit boards also hide icons for changing board
                      and replace them with a 'edit-card' button on the right and 'delete-card' button on the left
               */}
            </span>
          </div>
        </h2>  
        <ul>
          {cards.map(card => (
            <li className='cardLi' key={ card.id }>
              <span onClick={(e) => changeBoard(id, card.id, e.target.innerText)}>{!firstBoard && '⬅️'}</span>
              <Card text={ card.text } />
              <span onClick={(e) => changeBoard(id, card.id, e.target.innerText)}>{!lastBoard && '➡️'}</span>
            </li>
          ))}
          <li>
            <form onSubmit={ this.handleSubmit }>
              <textarea 
                name='newCardText'
                type="text"
                value={ newCardText }
                onChange={ this.handleChange }
                className='add-card'
                placeholder='+ Add another card'
              />
              <button className='btn' disabled={ newCardText.length === 0 }>Add Card</button>
            </form>
          </li>
        </ul>    
      </div>
    )
  }
}

