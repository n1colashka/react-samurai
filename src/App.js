import React, { Suspense } from "react";
import {BrowserRouter, Route} from "react-router-dom";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Sidebar from "./components/Sidebar/Sidebar";
import UsersContainer from "./components/Users/UsersContainer";
import LoginPage from "./components/Login/Login";
import { initializeApp } from "./redux/app-reducer";
import {connect, Provider} from "react-redux";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";
import ErrorBoundary from "./components/common/ErrorBoundary/ErrorBoundary";

const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));
const MessagesContainer = React.lazy(() => import("./components/Messages/MessagesContainer"));


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }
    render() {
        if (!this.props.initialized) {return <Preloader />}
        else return (
            <div className="page-wrapper">
                <HeaderContainer />
                <div className="page-inner">
                    <Sidebar state={this.props.sidebar} />
                    <div className="page-content">
                        <ErrorBoundary>
                            <Suspense fallback={<Preloader/>}>
                                <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
                                <Route path="/messages" render={() => <MessagesContainer />} />
                                <Route path="/news" component={News} />
                                <Route path="/music" component={Music} />
                                <Route path="/users" render={ () => <UsersContainer/> } />
                                <Route path="/settings" component={Settings} />
                                <Route path="/login" render={() => <LoginPage /> }/>
                            </Suspense>
                        </ErrorBoundary>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    initialized: state.app.initialized,
})

const AppContainer = connect(mapStateToProps, {initializeApp})(App);

const SamuraiJSApp = (props) => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer sidebar={store.getState().sidebar} />
            </Provider>
        </BrowserRouter>
    )
}

export default SamuraiJSApp;