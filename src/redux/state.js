
let state = {
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
            { id: 4, message: 'wow!'},
            { id: 4, message: 'wow!'},
            { id: 4, message: 'wow!'},
            { id: 4, message: 'wow!'},
            { id: 4, message: 'wow!'},
            { id: 4, message: 'wow!'},
            { id: 4, message: 'wow!'}
        ],
        dialogs: [
            { id: 1, name: 'Den'},
            { id: 2, name: 'Stas'},
            { id: 3, name: 'Ilya'},
            { id: 4, name: 'Ivan'},
            { id: 5, name: 'Sasha'}
        ]
    },
    sidebar: {}
}

let rerenderEntireTree = () => {
    console.log('state changed') // ф-я "заглушка"
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer; // это - паттерн observer(почитать) / publisher-subscriber(доп)
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const addPost = () => { // важно импортировать под тем же именем(тк нет default)
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export default state; // под каким именем импортириуем - неважно(default)