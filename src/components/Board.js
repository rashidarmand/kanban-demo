import React, { Component } from 'react';

export default class Board extends Component {
  state = {
    newCardText: ''
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }
  render() {
    const { name, color, cards } = this.props;
    const { newCardText } = this.state;
    const h2Style = { 
      background: color,
      textAlign: 'center',
      borderRadius: '5px'
    }

    return (
      <div className='boards'>
        <h2 style={ h2Style }>{ name }</h2>  
        <ul>
          {cards.map(card => (
            <li key={ card.id }>
              { card.text }
            </li>
          ))}
          <li>
            <textarea 
              name='newCardText'
              type="text"
              value={ newCardText }
              onChange={ this.handleChange }
              className='add-card'
              placeholder='+ Add another card'
            />
            <button className='btn'>Add Card</button>
          </li>
        </ul>    
      </div>
    )
  }
}

