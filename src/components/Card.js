import React, { Fragment } from 'react';
import { FaEdit, FaTimesCircle } from 'react-icons/fa';

class Card extends React.Component {
  state = {
    newCardText: '',
    editIcons: false,
    showEdit: false
  }

  showEditIcons = () => this.setState({ editIcons: !this.state.editIcons });

  showEditInput = () => this.setState({ showEdit: !this.state.showEdit });

  handleChange = ({ target: { name, value } }) => this.setState({ [name]: value });

  handleSubmit = (e) => {
    e.preventDefault();
    const { id, cardId, editCard } = this.props;
    const { newCardText } = this.state;
    // Hide input & edit icons after editing the card
    editCard(id, cardId, newCardText);
    this.showEditInput();
    this.showEditIcons();
  }
  render() {
    const { text, id, cardId, deleteCard, changeBoard, firstBoard, lastBoard } = this.props;
    const { newCardText, editIcons, showEdit } = this.state;

    return (
      <Fragment>
        {editIcons 
          ? <span><FaEdit className='edit-icons edit' onClick={ this.showEditInput } /></span>
          :  <span onClick={(e) => changeBoard(id, cardId, e.target.innerText)}>
              {!firstBoard && '⬅️'}
            </span>}
        {showEdit
          ? <form onSubmit={ this.handleSubmit } >
              <input 
                type='text'
                name='newCardText'
                className='edit-card'
                value={ newCardText }
                placeholder={ text }
                onChange={ this.handleChange }
                />
            </form>
          : <div onClick={ this.showEditIcons }>
              { text }
            </div>}
        {editIcons
          ? <span><FaTimesCircle className='edit-icons X' onClick={() => deleteCard(id, cardId)} /></span>
          : <span onClick={(e) => changeBoard(id, cardId, e.target.innerText)}>
              {!lastBoard && '➡️'}
            </span>}
      </Fragment>
    );
  }
}

/*
  @TODO:
    - On card click show edit button on left and delete button on right
    - Call editCard & deleteCard functions when their respective buttons are clicked
*/

export default Card;