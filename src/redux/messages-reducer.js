const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
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
};

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            return {
                ...state,
                messages: [...state.messages, {id: 5, text: action.newMessageText, sender: action.sender}],
            };
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                newMessageText: action.newText
            };
        }
        default:
            return state;
    }
};

export const addMessage = (text) => {
    return {
        type: ADD_MESSAGE,
        newMessageText: text,
        sender: "i",
    }
};

export const updateNewMessageText = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: text,
    };
};

export default messagesReducer;
