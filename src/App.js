import "reset-css";
import "./App.css";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {
    return (
        <div className="page-wrapper">
            <Header />
            <div className="page-inner">
                <Sidebar />
                <Profile />
            </div>
        </div>
    );
};

export default App;
