import { useState } from "react";
import { Routes, Route } from "react-router-dom";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
import Home from "../src/pages/Home";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";
import MainLayout from "./Components/MainLayout";
import DetailBoardPage from "./pages/DetailBoardPage";
import WriteBoardPage from "./pages/WriteBoardPage";
import NFTPage from "./pages/NFTPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full ">
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/main/write" element={<WriteBoardPage />} />
          <Route path="/main/detailed/:id" element={<DetailBoardPage />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/Signup" element={<SignupPage />} />
          <Route path="/NFT" element={<NFTPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
