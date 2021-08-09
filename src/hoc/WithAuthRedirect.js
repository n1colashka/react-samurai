import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
}); 

const withAuthRedirect = (Component) => {
    const ComponentWithRedirect = (props) => {
        if (!props.isAuth) return <Redirect to='/login' />;
        return <Component {...props} />
    }
    
    const ConnectedComponentWithRedirect = connect(mapStateToProps)(ComponentWithRedirect);

    return ConnectedComponentWithRedirect;
}

export default withAuthRedirect;