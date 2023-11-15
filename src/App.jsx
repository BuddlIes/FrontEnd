import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Modal from "react-modal";
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
import ChatPage from "./pages/ChatPage";
import MyPage from "./pages/MyPage";
import StampPage from "./pages/MyPage/Components/LeftSide/stampPage";
import VolHistory from "./pages/MyPage/Components/LeftSide/VolHistory";

function App() {
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
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/mypage/StampPage" element={<StampPage />} />
          <Route path="/mypage/VolHistory" element={<VolHistory />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
