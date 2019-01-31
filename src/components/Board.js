import React from 'react';

export default function Board({ name, color, cards }) {
  const h2Style = { 
    background: color,
    textAlign: 'center'
  }
  return (
    <div className='boards'>
      <h2 style={h2Style}>{ name }</h2>  
      <ul>
        {cards.map((card, i) => (
          <li key={ i }>
            { card }
          </li>
        ))}
      </ul>    
    </div>
  )
}
