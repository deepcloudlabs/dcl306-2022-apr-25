import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App2 from './App2';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import PlayerWins from "./components/PlayerWins";
import PlayerLoses from "./components/PlayerLoses";

const root = ReactDOM.createRoot(document.getElementById('root'));
let routing = <Routes>
    <Route path="/" exact element={<App2/>}></Route>
    <Route path="/wins" element={<PlayerWins/>}></Route>
    <Route path="/loses" element={<PlayerLoses/>}></Route>
</Routes>;

root.render(
    <React.StrictMode>
        <BrowserRouter>
            {routing}
        </BrowserRouter>

    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
