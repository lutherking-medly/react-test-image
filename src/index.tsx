import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Cards from './App';
import reportWebVitals from './reportWebVitals';
const cardTypes = ['AMERICAN_EXPRESS', 'DISCOVER', 'MASTERCARD', 'VISA'];

ReactDOM.render(
  <React.StrictMode>
    {cardTypes.map(card => {
      return <Cards brand={card}/>
    })}
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
