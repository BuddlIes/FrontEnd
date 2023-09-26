import { useState } from "react";
import { Routes, Route } from "react-router-dom";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
import Home from "../src/pages/Home";
import LoginPage from "./pages/Login";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<LoginPage />}/>
      </Routes>
    </div>
  );
}

export default App;
