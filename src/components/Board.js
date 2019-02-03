import React, { Component } from 'react';
import CardList from './CardList';
import BoardHeader from './BoardHeader';


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
    const { name, color, cards, firstBoard, lastBoard, editCard, deleteCard, changeBoard, editBoard, deleteBoard } = this.props;
    const { newCardText, id } = this.state;

    return (
      <div className='boards'>
        <BoardHeader 
          name={ name } 
          id={ id } 
          color={ color } 
          editBoard={ editBoard } 
          deleteBoard={ deleteBoard } 
        /> 
        <ul>
          <CardList 
            cards={ cards } 
            id={ id } 
            editCard={ editCard }
            deleteCard={ deleteCard }
            changeBoard={ changeBoard } 
            firstBoard={ firstBoard } 
            lastBoard={ lastBoard } 
          />
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

