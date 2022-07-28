import React from 'react';
import s from './SearchBar.module.css';

export default function SearchBar({ onSearch }) {
  // acá va tu código
  return (
    <div className ={s.conteiner}>
      <imput type='text' />
      <botton className = {s.bttn} onClick={() => onSearch('Buscando ciudad')}>Agregar</botton>

    </div>
  )
};