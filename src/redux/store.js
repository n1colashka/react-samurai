import messagesReducer from "./messages-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

const store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, likesCount: 32, text: "Hi, it's my first post!" },
                { id: 2, likesCount: 4, text: "Welcome again!" },
                { id: 3, likesCount: 15, text: "What's up?" },
                {
                    id: 4,
                    likesCount: 0,
                    text: "Lorem ipsum dolor sit amet consectetur adipi",
                },
            ],
            newPostText: "hah-ha-ha",
        },
        messagesPage: {
            users: [
                { id: 2, name: "Alex" },
                { id: 3, name: "Sarah" },
                { id: 4, name: "Victor" },
                { id: 5, name: "Helena" },
            ],
            messages: [
                { id: 1, text: "Hi", sender: "i" },
                { id: 2, text: "What", sender: "me" },
                { id: 3, text: "Yo", sender: "i" },
                { id: 4, text: "What's up?", sender: "me" },
                {
                    id: 5,
                    text: "Lorem ipsum dolor sit amet consectetur adipi",
                    sender: "i",
                },
            ],
            newMessageText: "Really?",
        },
        sidebar: {
            friends: [
                {
                    id: 1,
                    name: "Alex",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH6Uyi30Ty2WkMb0ZjuFLoXmkRwrrMObm-X2zztWtGbOgyA-i7mFzuiSKltN14HLAJDVM&usqp=CAU",
                },
                {
                    id: 3,
                    name: "Sarah",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVKNy38wfvGKqs5oRzuMwpgywiTlF4FmHZ2JRDG2JUWXl3l7wHP_zcQ8adJLDvEMBsiCg&usqp=CAU",
                },
                {
                    id: 5,
                    name: "Victor",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG7ZHHUdN_3p6I5EAb0khNR1ESNmRw_z-vLgs-qma5nH4xSxAGC38uSZ9rldLMUTmGkfw&usqp=CAU",
                },
                {
                    id: 5,
                    name: "Johnny",
                    image: "https://www.signivis.com/img/custom/avatars/member-avatar-01.png",
                },
            ],
        },
    },

    _callSubscriber() {
        console.log("called");
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    setState(state) {
        this._state = state;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    },
};

window.store = store;

export default store;
