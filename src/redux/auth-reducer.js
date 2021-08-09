import { authAPI } from "../api/api";

const SET_USER_DATA = "SET-USER-DATA";
const SET_AUTH_STATUS = "SET-AUTH-STATUS";

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    authStatus: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload,
            };
        }
        case SET_AUTH_STATUS: {
            return {
                ...state,
                authStatus: action.authStatus
            };
        }
        default:
            return state;
    }
};

const setAuthUserData = (userId, email, login, isAuth) => {
    return {
        type: SET_USER_DATA,
        payload: {
            userId,
            email,
            login,
            isAuth,
        },
    };
};

export const setAuthStatus = message => {
    return {
        type: SET_AUTH_STATUS,
        authStatus: message,
    }
}

export const getAuthUserData = () => (dispatch) => {
    return authAPI.getAuthUserData().then(data => {
        if (data.resultCode === 0) {
            const { id, email, login } = data.data;
            dispatch(setAuthUserData(id, email, login, true));
        }
    });
};

export const login = (email, password, rememberMe, setSubmitting) => (dispatch) => {
    authAPI.login(email, password, rememberMe).then(data => {
        setSubmitting(true);
        if (data.resultCode === 0) {
            dispatch(getAuthUserData());
        } else {
            console.log(data.messages[0]);
            dispatch(setAuthStatus(data.messages[0]))
        }
    });
};

export const logout = () => (dispatch) => {
    authAPI.logout().then((data) => {
        if (data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
    });
};

export default authReducer;