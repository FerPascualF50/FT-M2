import React from 'react';

export default function Card(props) {
  // acá va tu código
  return (
  <div>
    <botton>onClick={onClose}X</botton>
    <h3>{props.name}</h3>
    <div>
      <p>MIN</p>
      <p>{props.min}</p>
    </div>
    <div>
    <p>MAX</p>
      <p>{props.max}</p>
    </div>
    <img src ={'falata lo del deadme, en tepleate stroings'} alt ='Img not found' />
  </div>
  )
};