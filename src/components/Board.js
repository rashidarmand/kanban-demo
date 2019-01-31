import React, { Component } from 'react';
import Card from './Card';

export default class Board extends Component {
  state = {
    newCardText: ''
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitted', this.state.newCardText)
  }

  render() {
    const { name, color, cards } = this.props;
    const { newCardText } = this.state;
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
            <li key={ card.id }>
              <Card text={ card.text } />
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

