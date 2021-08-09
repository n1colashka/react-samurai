import { profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_STATUS = "SET-STATUS";

let initialState = {
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
    profile: null,
    status: ""
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return { 
                ...state,
                posts: [...state.posts, {id: 5, text: action.newPostText, likesCount: 0}],
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state;
    }
};

export const addPost = (text) => ({ type: ADD_POST, newPostText: text});

export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile: profile,
    };
};

export const getUserProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId).then((response) => {
            dispatch(setUserProfile(response.data));
        });
    }
}

export const setStatus = (status) => {
    return {
        type: SET_STATUS,
        status: status,
    };
};

export const getUserStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then((response) => {
            dispatch(setStatus(response.data));
        });
    }
}

export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        })
    }
}

export default profileReducer;