import React, { Component } from 'react';
import { FiXCircle, FiEdit } from 'react-icons/fi'
import { GoKebabVertical } from "react-icons/go";

class Tooltip extends Component {
  state = {
    showTooltip: false
  }

  handleClick = () => this.setState(prevState => ({ showTooltip: !prevState.showTooltip }));

  render() {
    const { showTooltip } = this.state;
    const tooltipTxt = showTooltip ? show : null;
    const focused = showTooltip ? active : null;

    return (
      <div className='tooltip'>
        <GoKebabVertical style={ focused } className='menu-options' onClick={ this.handleClick } />
        <span style={ tooltipTxt } className="tooltip-text">
          <FiEdit/>
          <FiXCircle/>
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
