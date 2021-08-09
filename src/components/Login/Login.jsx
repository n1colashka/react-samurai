import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../../redux/auth-reducer";
import LoginForm from "./LoginForm";

const Login = (props) => {
    if (props.isAuth) {
        return <Redirect to={"/profile"} />;
    }
    return <LoginForm login={props.login} authStatus={props.authStatus}/>;
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        authStatus: state.auth.authStatus
    }
}

export default connect(mapStateToProps, {login})(Login);
