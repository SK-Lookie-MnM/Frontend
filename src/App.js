import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp/SignUp";
import Value from "./pages/Value/Value";
import UsageInfo from "./pages/UsageInfo/UsageInfo";
import MainPage from "./pages/mainpage/mainpage";
import MyPage from "./pages/Mypage/MyPage";

function App() {
  return (
    <div className="content">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/login" />
        <Route path="/value" element={<Value />} />
        <Route path="/usageInfo" element={<UsageInfo />} />
        <Route path="/myPage" element={<MyPage />} />
      </Routes>
    </div>
  );
}
export default App;
