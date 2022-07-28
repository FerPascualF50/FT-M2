import React from 'react';
import Card from './Card';
import s from './Cards.module.css'

export default function Cards(props){
  if(!props.cities)return <h1>No cities </h1>;

  // acá va tu código
  // tip, podés usar un map
  return (
  <div className ={s.container}>
    {
      props.cities.map(city =>
        <Card
          key={city.id}
          max={city.main.temp_max}
          min={city.main.temp_min}
          name={city.name}
          img={city.weather[0].icon}
          onClose={() => alert(city.name)}
        />)

    }
  </div>
  )
};