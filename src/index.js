import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import  Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import GlobalStyle from "./GlobalStyles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="layout-container">
        <GlobalStyle />
        <Navbar />
        <App />
        <Footer />
      </div>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
