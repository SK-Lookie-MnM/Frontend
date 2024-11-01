import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp/SignUp";
import Value from "./pages/Value/Value";
import UsageInfo from "./pages/UsageInfo/UsageInfo";
import MainPage from "./pages/mainpage/mainpage";
import Article from "./pages/Articles/Articles"
import Union from "./pages/Union/Union";
function App() {
  return (
    <div className="content">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/login" />
        <Route path="/value" element={<Value />} />
        <Route path="/union" element={<Union />} />
        <Route path="/usageInfo" element={<UsageInfo />} />
          <Route path="/Articles" element={<Article />} />
      </Routes>
    </div>
  );
}
export default App;
