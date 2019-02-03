import React, { Component } from 'react';
import Tooltip from './Tooltip';

class BoardHeader extends Component {
  state = {
    showInput: false,
    newName: this.props.name
  }

  showInputField = () => {
    this.setState({ showInput: !this.state.showInput })
  }                  

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { newName, showInput } = this.state;
    const { editBoard, id } = this.props;
    editBoard(id, newName);
    this.setState({ showInput: !showInput });
  }

  render() {
    const { showInput, newName } = this.state;
    const { color, name, deleteBoard, id } = this.props;

    return (
      <h2 className='board-title' style={{ background: color }}>
        {!showInput
          ? name
          : <form onSubmit={ this.handleSubmit } >
              <input 
                type='text'
                name='newName'
                value={ newName }
                onChange={ this.handleChange }
               />
            </form>} 
        <Tooltip showInput={ this.showInputField } deleteBoard={ deleteBoard } id={ id } />
      </h2> 
    )
  }
}

export default BoardHeader
