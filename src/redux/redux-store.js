import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let reducers = combineReducers({
    profilePage: profileReducer, // каждой странице принадлежит свой reducer
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer

});

let store = createStore(reducers); // передаем все reducer'ы в store

export default store;