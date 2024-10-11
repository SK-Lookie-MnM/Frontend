import "./App.css";
import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp/SignUp";
import MainPage from "./pages/mainpage/mainpage";
import Navbar from "./components/common/Navbar";
import Value from './pages/Value/Value';
import Footer from "./components/common/Footer";
import UsageInfo from "./pages/UsageInfo/UsageInfo";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/signUp" element={<SignUp />} />
                <Route path="/login" />
                <Route path="/value" element={<Value />} />
                <Route path="/usageInfo" element={<UsageInfo />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;