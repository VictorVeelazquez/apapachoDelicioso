import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faIceCream, faCake, faCookie, faCheese, faBreadSlice } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="App">
      <h1 className="title">APAPACHO DELICIOSO</h1>
      
      <div className="section">
        <h2 className="section-title">
          <FontAwesomeIcon icon={faCoffee} className="icon" />
          FRAPPÉS
        </h2>
        <ul className="item-list">
          <li>OREO - $48.00</li>
          <li>MAZAPAN - $48.00</li>
          <li>FRAPUCHINO - $48.00</li>
          <li>TARO - $50.00</li>
          <li>FERRERO - $55.00</li>
        </ul>
      </div>

      <div className="section">
        <h2 className="section-title">
          <FontAwesomeIcon icon={faIceCream} className="icon" />
          MALTEADA
        </h2>
        <ul className="item-list">
          <li>VAINILLA - $60.00</li>
          <li>FRESA - $60.00</li>
          <li>CHOCOLATE - $60.00</li>
        </ul>
      </div>

      <div className="section">
        <h2 className="section-title">
          <FontAwesomeIcon icon={faCake} className="icon" />
          POSTRES
        </h2>
        <ul className="item-list">
          <li>MINI-HOTCAKES - $38.00</li>
          <li>HOTCAKE - $28.00</li>
          <li>HOTCAKES RELLENOS - $35.00</li>
          <li>WAFFLES 2 - $40.00</li>
          <li>TACO WAFFLE - $28.00</li>
          <li>TORRE DE WAFFLES - $55.00</li>
        </ul>
      </div>

      <div className="section">
        <h2 className="section-title">
          <FontAwesomeIcon icon={faCookie} className="icon" />
          CREPAS
        </h2>
        <ul className="item-list">
          <li>NUTELLA/FRESA - $35.00</li>
          <li>NUTELLA/DURAZNO - $35.00</li>
          <li>NUTELLA/PLATANO - $35.00</li>
          <li>NUTELLA/DELIC - $35.00</li>
          <li>NUTELLA/PHILADELPHIA - $35.00</li>
          <li>CAJETA/LECHERA - $35.00</li>
          <li>CREPA ESPECIAL (NUTELLA, DELICE, K.BUENO, LUNETAS, OREO) - $45.00</li>
        </ul>
      </div>

      <div className="section seasonal">
        <h2 className="section-title">
          <FontAwesomeIcon icon={faBreadSlice} className="icon" />
          POSTRES DE TEMPORADA FIN DE SEMANA
        </h2>
        <ul className="item-list">
          <li>FRESAS CON CREMA</li>
          <li>PAN DE MUERTO RELLENO</li>
          <li>ROLES DE CANELA</li>
          <li>MARQUESITAS</li>
        </ul>
      </div>

      <div className="section">
        <h2 className="section-title">
          <FontAwesomeIcon icon={faCheese} className="icon" />
          TOPPINGS Y MERMELADAS
        </h2>
        <ul className="item-list">
          <li>LECHERA, FRESAS, NUTELLA, DURAZNO, CAJETA, PLATANO, HERSHEY, OREO, MAPLE, LUNETAS, KINDER DELICE, KINDER BUENO</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
