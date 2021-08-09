import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import MessagesContainer from "./components/Messages/MessagesContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Sidebar from "./components/Sidebar/Sidebar";
import UsersContainer from "./components/Users/UsersContainer";
import LoginPage from "./components/Login/Login";
import { initializeApp } from "./redux/app-reducer";
import { connect } from "react-redux";
import Preloader from "./components/common/Preloader/Preloader";

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
                        <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
                        <Route path="/messages" render={() => <MessagesContainer />} />
                        <Route path="/news" component={News} />
                        <Route path="/music" component={Music} />
                        <Route path="/users" render={ () => <UsersContainer/> } />
                        <Route path="/settings" component={Settings} />
                        <Route path="/login" render={() => <LoginPage /> }/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    initialized: state.app.initialized,
})

export default connect(mapStateToProps, {initializeApp})(App);

// export default App;
