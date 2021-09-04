import { profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const DELETE_POST = "DELETE-POST";
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
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.id)
            }
        }

        default:
            return state;
    }
};

export const deletePost = (postId) => {
    return {
        type: DELETE_POST,
        id: postId
    }
}

export const addPost = (text) => ({ type: ADD_POST, newPostText: text});

export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile: profile,
    };
};

export const getUserProfile = (userId) => async (dispatch) => {
    const response = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
}

export const setStatus = (status) => {
    return {
        type: SET_STATUS,
        status: status,
    };
};

export const getUserStatus = (userId) => async (dispatch) => {
    const response = profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
}

export const updateStatus = (status) => async (dispatch) => {
        const response = await profileAPI.updateStatus(status);
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
}

export default profileReducer;