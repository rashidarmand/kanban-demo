import React, { Component } from 'react';
import Card from './Card';
import Tooltip from './Tooltip';


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

  handleClick = (e) => {
    console.log('here')
    debugger
  }

  render() {
    const { name, color, cards, firstBoard, lastBoard, changeBoard, deleteBoard } = this.props;
    const { newCardText, id } = this.state;

    return (
      <div className='boards'>
        <h2 className='board-title' style={{ background: color }}>
          { name } 
          <Tooltip  />
          {/* @TODO: pass down deleteBoard */}
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

