import logo from './logo.svg';
import './App.css';
import Mainpage from "./components/mainpage/mainpage";
import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp/SignUp";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/singUp" element={<SignUp />} />
            <Route path="/login" />
        </Routes>
        <Mainpage />
    </div>
  );
}

export default App;

