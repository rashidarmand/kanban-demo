import React, { Component } from 'react';
import Card from './Card';

export default class Board extends Component {
  state = {
    newCardText: '',
    id: this.props.id
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleChangeBoard = (e) => {

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
    const h2Style = { 
      background: color,
      color: '#fff',
      textAlign: 'center',
      borderRadius: '5px'
    }

    return (
      <div className='boards'>
        <h2 style={ h2Style }>{ name }</h2>  
        <ul>
          {cards.map(card => (
            <li className='cardLi' key={ card.id }>
              <span onClick={ (e) => {
                console.log(e.target.innerText)
                changeBoard(id, card.id, e.target.innerText) }
              }>{!firstBoard && '⬅️'}</span>
              <Card text={ card.text } />
              <span onClick={ (e) => changeBoard(id, card.id, e.target.value)  }>{!lastBoard && '➡️'}</span>
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

