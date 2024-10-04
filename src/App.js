import './App.css';
import { Routes, Route } from "react-router-dom";
import Mainpage from "./components/mainpage/mainpage";
import SignUp from "./pages/SignUp/SignUp";

function App() {
    return (
        <div className="App">
            <div className="black-nav">
                <div>MNM</div>
            </div>
            <Mainpage />
            <Routes>
                <Route path="/signUp" element={<SignUp />} />
                <Route path="/login" />
            </Routes>
        </div>
    );
}

export default App;
