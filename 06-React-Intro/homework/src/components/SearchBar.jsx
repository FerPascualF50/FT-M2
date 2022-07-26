import React from 'react';

export default function SearchBar({ onSearch }) {
  // acá va tu código
  return (
    <div>
      <imput type='text' />
      <botton onClick={() => onSearch('Buscando ciudad')}>Agregar</botton>

    </div>
  )
};