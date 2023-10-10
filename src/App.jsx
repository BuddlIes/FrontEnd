import { useState } from "react";
import { Routes, Route } from "react-router-dom";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
import Home from "../src/pages/Home";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/Login";
import MainLayout from "./Components/MainLayout";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full">
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/main" element={<MainPage />} />
        </Route>
        <Route path="/Login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
