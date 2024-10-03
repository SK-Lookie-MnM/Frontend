import "./App.css";
import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp/SignUp";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/singUp" element={<SignUp />} />
        <Route path="/login" />
      </Routes>
    </div>
  );
}

export default App;
