import { useState } from "react";
import { Routes, Route } from "react-router-dom";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
import Layout from "./components/Layout";
import Home from "../src/pages/Home";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
