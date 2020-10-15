import React from 'react';
import ReactDOM from 'react-dom';
// import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';

import './index.css';
//Referencia al div root
const divRoot=document.querySelector('#root');

//Renderizarlo en el documento
//Primer parametro es lo que quiero renderizar
//Segundo parametro donde se va a renderizar

ReactDOM.render(<CounterApp value={5} /> , divRoot);

