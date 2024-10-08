import "./App.css";
import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp/SignUp";
import MainPage from "./pages/mainpage/mainpage";
import Navbar from "./components/common/Navbar";

function App() {
    return (
        <div className="App">
            <Navbar />  {/* 모든 페이지에서 표시될 수 있게 외부에 렌더링 */}
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/signUp" element={<SignUp />} />
                <Route path="/login" />
            </Routes>
        </div>
    );
}

export default App;
