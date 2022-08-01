import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) {
  
  return (
    <div className ='nav-header'>
      <img src={Logo} alt= 'img not found' />
      <h3>Henry -Wheather app</h3>
      <SearchBar onSearch={onSearch} />
    </div>
  );
};

export default Nav;
