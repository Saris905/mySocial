const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
}


const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({ id: 8, message: body})
            return state;
        default:
            return state;
    }

}


export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default dialogsReducer;