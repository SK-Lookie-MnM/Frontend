import "./App.css";
import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp/SignUp";
import MainPage from "./pages/mainpage/mainpage";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/signUp" element={<SignUp />} />
                <Route path="/login" />
            </Routes>
        </div>
    );
}

export default App;
