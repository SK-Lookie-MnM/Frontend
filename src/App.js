import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp/SignUp";
import Value from "./pages/Value/Value";
import UsageInfo from "./pages/UsageInfo/UsageInfo";
import MainPage from "./pages/mainpage/mainpage";
import { Login } from "./pages/Login/Login";
import Article from "./pages/Articles/Articles"
import BM from "./pages/BM/BM";
function App() {
  return (
    <div className="content">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/value" element={<Value />} />
        <Route path="/usageInfo" element={<UsageInfo />} />
        <Route path="/Articles" element={<Article />} />
        <Route path="/bm" element={<BM />} />
      </Routes>
    </div>
  );
}
export default App;
