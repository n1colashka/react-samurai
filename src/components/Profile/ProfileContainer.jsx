import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import withAuthRedirect from "../../hoc/WithAuthRedirect";
import { getUserProfile, getUserStatus, updateStatus } from "../../redux/profile-reducer";
import Profile from "./Profile";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId || this.props.authorizedUserId;
        if (!userId) this.props.history.push("/login");
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }
    
    render() {
        return <Profile {...this.props} />
    }
};

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
}); 

export default compose(
    connect(mapStateToProps, { getUserProfile, getUserStatus, updateStatus }),
    withRouter,
    withAuthRedirect
)(ProfileContainer);