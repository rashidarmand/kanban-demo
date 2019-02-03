import React, { Fragment } from 'react';

const Card = ({ text }) => <div>{ text }</div>;

const CardList = ({ cards, id, changeBoard, firstBoard, lastBoard }) => (
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
