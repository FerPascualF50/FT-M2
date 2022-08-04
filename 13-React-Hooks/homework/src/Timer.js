import React, { useState, useEffect, useRef } from 'react';
import './Timer.css';


const Timer = () => {
  const myRef = useRef(null);
  const [segundos, setSegundos] = useState(0);
  const [activo, setActivo] = useState(false);
  const [tipo, setTipo] = useState('Contador');

  useEffect(() => {
    let intervalo = null;
    if (activo && tipo === 'Contador') {
      intervalo = setInterval(() => {
        setSegundos(segundos => segundos + 1);
      }, 1000);
    }
    if (activo && tipo === 'Cuenta Regresiva') {
      intervalo = setInterval(() => {
        setSegundos(segundos => segundos - 1);
      }, 1000);
    }
    if (!activo && segundos !== 0 && tipo === 'Contador') {
      clearInterval(intervalo);
    }
    if (segundos <= 0 && tipo === 'Cuenta Regresiva') {
      reset();
      myRef.current.value = 0;
      clearInterval(intervalo);
    }

    return () => clearInterval(intervalo);
  }, [activo, segundos, tipo]);

  
  function toggle() {
    setActivo(!activo);
  }

  function reset() {
    setSegundos(0);
    setActivo(false);
  }

  function cambioTipo() {
    if(tipo === 'Contador') setTipo('Cuenta Regresiva')
    if(tipo === 'Cuenta Regresiva') setTipo('Contador')
}

  function agregaSegundos() {
  // `current` apunta al elemento de entrada de texto montado
  let ref = myRef.current.value
  setSegundos(Number(ref))
}

  return (
    <div className="app">
      <div className="time">
        {segundos}s
      </div>
      <div className="row">
        <button onClick={toggle} className={`button button-primary button-primary-${activo ? 'active' : 'inactive'}`}>
          {activo ? 'Pausa' : 'Inicio'}
        </button>
        <button onClick={reset} className="button">
          Reset
        </button>
      </div>
      <button onClick={cambioTipo}className="button">
          {tipo}
      </button>
      {tipo === 'Cuenta Regresiva' && <input
       type="number" 
       ref={myRef} 
       onChange={agregaSegundos} 
       placeholder="Ingresa Segundos" 
       autoComplete="off"/>}
    </div>
  );
};

export default Timer;
