import * as serviceWorker from './serviceWorker';
import store from "./redux/redux-store";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} dispatch={ store.dispatch.bind(store) } store={store} />
        </BrowserRouter>, document.getElementById('root')); // (getState() мы вызываем(уже нет), чтоб получить
    // содержимое, а addPost просто передаем, по этой причине, к моменту вызова addPost контекст this будет равен
    // контексту объекта из которого вызывается(стоит слева от .addPost()) Поэтому используем bind чтобы сохранить родительский контекст до самого вызова


};

rerenderEntireTree(store.getState()); // первичный запуск с исходными данными

store.subscribe( () => {
    let state = store.getState();
    rerenderEntireTree(state);
}); // во изб. импорта, при первичной отрисовке ф-я возвращает тело нашей ф-ии "наверх" и там перезаписывает его


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
