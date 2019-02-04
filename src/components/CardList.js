import React, { Fragment } from 'react';
import Card from './Card';

const CardList = ({ cards, id, editCard, deleteCard, changeBoard, firstBoard, lastBoard }) => (
  <Fragment>
    {cards.map(card => (
      <li className='cardLi' key={ card.id }>
        <Card 
          id={ id } 
          cardId={ card.id }
          text={ card.text }
          editCard={ editCard }
          deleteCard={ deleteCard }
          changeBoard={ changeBoard }
          firstBoard={ firstBoard }
          lastBoard={ lastBoard }
        />
      </li>
    ))}
  </Fragment>
);

export default CardList;
