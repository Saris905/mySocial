import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are you!', likesCount: 10},
                { id: 2, message: 'It\'s my first post', likesCount: 8},
                { id: 3, message: 'It\'s my second post', likesCount: 11},
                { id: 4, message: 'It\'s my third post', likesCount: 4}
            ],
            newPostText: ''
        },
        dialogsPage: {
            messages: [
                { id: 1, message: 'hi!'},
                { id: 2, message: 'What\'s up?!'},
                { id: 3, message: 'How are you?'},
                { id: 4, message: 'wow!'}
            ],
            dialogs: [
                { id: 1, name: 'Den'},
                { id: 2, name: 'Stas'},
                { id: 3, name: 'Ilya'},
                { id: 4, name: 'Ivan'},
                { id: 5, name: 'Sasha'}
            ],
            newMessageBody: ''
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('state changed') // ф-я "заглушка"
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer; // это - паттерн observer(почитать) / publisher-subscriber(доп)
    },

    dispatch(action) { // state меняется только через dispatch
        // каждый action обрабатывает отдельный reducer
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }

}

export default store; // под каким именем импортириуем - неважно(default)
window.store = store;