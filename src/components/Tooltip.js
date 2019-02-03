import React, { Component } from 'react';
import { FiXCircle, FiEdit } from 'react-icons/fi'
import { GoKebabVertical } from "react-icons/go";

class Tooltip extends Component {
  state = {
    showTooltip: false
  }

  showToolTip = () => this.setState(prevState => ({ showTooltip: !prevState.showTooltip }));

  handleShowInput = () => this.props.showInput();
  
  render() {
    const { showTooltip } = this.state;
    const { deleteBoard, id } = this.props;
    const tooltipTxt = showTooltip ? show : null;
    const focused = showTooltip ? active : null;

    return (
      <div className='tooltip'>
        <GoKebabVertical style={ focused } className='menu-options' onClick={ this.showToolTip } />
        <span style={ tooltipTxt } className="tooltip-text">
          <FiEdit onClick={ this.handleShowInput }/>
          <FiXCircle onClick={() => deleteBoard(id)}/>
        </span>
      </div>
    );
  }
}

const show = {
  visibility: 'visible',
  transition: 'all 0.4s',
  opacity: '1'
}

const active = {
  background: 'rgb(240, 240, 240)',
  color: 'black'
}

export default Tooltip;
