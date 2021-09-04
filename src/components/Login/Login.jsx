import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../../redux/auth-reducer";
import LoginForm from "./LoginForm";

const Login = ({login, authStatus, isAuth}) => {
    if (isAuth) {
        return <Redirect to={"/profile"} />;
    }
    return <LoginForm login={login} authStatus={authStatus}/>;
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        authStatus: state.auth.authStatus
    }
}

export default connect(mapStateToProps, {login})(Login);
