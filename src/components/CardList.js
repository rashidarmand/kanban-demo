import React, { Fragment } from 'react';
// import Tooltip from './Tooltip';

class Card extends React.Component {
  state = {
    newCardText: '',
    showEdit: false
  }

  showEditInput = () => this.setState({ newCardText: !this.state.newCardText });

  handleChange = ({ target: { name, value } }) => this.setState({ [name]: value });

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('success')
  }
  render() {
    const { text } = this.props;
    const { newCardText } = this.state;

    return (
      <Fragment>
        <div onClick={ this.showEditInput } >{ text }</div>
        <form onSubmit={ this.handleSubmit } >
          <input 
            type='text'
            name='newCardText'
            value={ newCardText }
            onChange={ this.handleChange }
            />
        </form>
      </Fragment>
    );
  }
}

/*
  @TODO:
    - On card click show edit button on left and delete button on right
    - Call editCard & deleteCard functions when their respective buttons are clicked
*/

const CardList = ({ cards, id, editCard, deleteCard, changeBoard, firstBoard, lastBoard }) => (
  <Fragment>
    {cards.map(card => (
      <li className='cardLi' key={ card.id }>
        <span onClick={(e) => changeBoard(id, card.id, e.target.innerText)}>
          {!firstBoard && '⬅️'}
        </span>
        <Card text={ card.text } />
        <span onClick={(e) => changeBoard(id, card.id, e.target.innerText)}>
          {!lastBoard && '➡️'}
        </span>
      </li>
    ))}
  </Fragment>
);

export default CardList;
