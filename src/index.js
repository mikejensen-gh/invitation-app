import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const initialInvitees = [
  {
    key: 0,
    name: 'Iver',
    confirmed: true
  },
  {
    key: 1,
    name: 'Corrina',
    confirmed: true
  },
  {
    key: 2,
    name: 'Joel',
    confirmed: true
  }
];

ReactDOM.render(<App initialInvitees={initialInvitees}/>, document.getElementById('root'));
registerServiceWorker();
