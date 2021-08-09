import React from "react";
import { connect } from "react-redux";
import {
    setCurrentPage,
    followUser,
    unfollowUser,
    getUsers,
    toggleIsFollowingInProgress
} from "../../redux/users-reducer";
import {
    getUsersSelector,
    getPageSizeSelector,
    getCurrentPageSelector,
    getIsFetchingSelector,
    getFollowingInProgressSelector,
    getTotalUsersCountSelector,
} from "../../redux/users-selectors";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {
    
    onPageChanged = (page) => {
        this.props.getUsers(page, this.props.pageSize);
    };

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    render() {
        return (
            <>
                {this.props.isFetching ? (
                    <Preloader />
                ) : null}
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    toggleFollow={this.props.toggleFollow}
                    toggleIsFollowingInProgress={this.props.toggleIsFollowingInProgress}
                    followingInProgress={this.props.followingInProgress}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    followUser={this.props.followUser}
                    unfollowUser={this.props.unfollowUser}
                />
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: getUsersSelector(state),
        pageSize: getPageSizeSelector(state),
        totalUsersCount: getTotalUsersCountSelector(state),
        currentPage: getCurrentPageSelector(state),
        isFetching: getIsFetchingSelector(state),
        followingInProgress: getFollowingInProgressSelector(state),
    };
};

export default connect(mapStateToProps, { followUser, unfollowUser, getUsers, toggleIsFollowingInProgress, setCurrentPage})(UsersContainer);