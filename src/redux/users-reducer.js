import { usersAPI } from "../api/api";

const TOGGLE_FOLLOW = "FOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING"
const TOGGLE_IS_FOLLOWING_IN_PROGRESS = "TOGGLE-IS-FOLLOWING-IN-PROGRESS"

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userId) return { ...user, followed: !user.followed };
                    return user;
                }),
            };
        case SET_USERS:
            return { ...state, users: [...action.users] }
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage }
        case SET_TOTAL_USERS_COUNT:
            return { ...state, totalUsersCount: action.totalUsersCount }
        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching }
        case TOGGLE_IS_FOLLOWING_IN_PROGRESS:
            return { 
                ...state, 
                followingInProgress: action.isFetching 
                    ? [...state.followingInProgress, action.userId] 
                    : state.followingInProgress.filter(id => id !== action.userId),
            }
        default:
            return state;
    }
};

export const toggleFollow = (userId) => ({ type: TOGGLE_FOLLOW, userId: userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, currentPage: page });
export const setTotalUsersCount = (count) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount: count });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching});
export const toggleIsFollowingInProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_IN_PROGRESS, isFetching, userId });

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(currentPage))
        
        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(toggleIsFetching(false));
                dispatch(setUsers(data.items));
                dispatch(setTotalUsersCount(data.totalCount));
            });
    }
}

export const followUser = (userId) => {
    return (dispatch) => {
        usersAPI.follow(userId)
            .then((data) => {
                dispatch(toggleIsFollowingInProgress(false, userId));
            if (data.resultCode === 0) {
                dispatch(toggleFollow(userId));
            }
        });
    }
}

export const unfollowUser = (userId) => {
    return (dispatch) => {
        usersAPI.unfollow(userId)
            .then((data) => {
                dispatch(toggleIsFollowingInProgress(false, userId));
            if (data.resultCode === 0) {
                dispatch(toggleFollow(userId));
            }
        });
    }
}

export default usersReducer;
