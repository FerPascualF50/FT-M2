import React from 'react';
import s from './Card.module.css';

export default function Card(props) {
  // acá va tu código
  return (
    <div className={s.container}>
      <button className={s.bttn} onClick={props.onClose}>X</button>
      <h3>{props.name}</h3>
      <div className ={s.infoContainer}>
      <div>
        <p>MIN</p>
        <p>{props.min}</p>
      </div>
      <div>
        <p>MAX</p>
        <p>{props.max}</p>
      </div>
      <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt='Img not found' />
      </div>
    </div>
  )
};