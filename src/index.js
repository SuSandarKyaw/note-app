import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import App1 from './App1';
import reportWebVitals from './reportWebVitals';
import { PhotoApp } from './App2';
import App from './App';
import Day3App from './Day3App';
import Day3App2 from './Day3App2';
import NoteCards from './NoteCards';
import NoteAppPage from './NoteApp';
import { CardNote } from './NoteCards/Mockcard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
<NoteCards/>
</>
)

;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
