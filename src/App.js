import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp/SignUp";
import Value from "./pages/Value/Value";
import UsageInfo from "./pages/UsageInfo/UsageInfo";
function App() {
  return (
    <div className="content">
      <Routes>
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/login" />
        <Route path="/value" element={<Value />} />
        <Route path="/usageInfo" element={<UsageInfo />} />
      </Routes>
    </div>
  );
}
export default App;
