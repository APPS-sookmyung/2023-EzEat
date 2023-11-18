import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import AskOptionPage from "./Pages/AskOptionPage/AskOptionPage";
import CategoryOption from "./Pages/CatagoryOption/CategoryOption";
import DistanceOption from "./Pages/DistanceOption/DistanceOption";
import RulletPage from "./Pages/RulletPage/RulletPage";
import FirstLoad from "./FirstLoad";
import Profile from "./Components/Profile";
import UpSide from "./Components/UpSide";
import DownSide from "./Components/DownSide";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/top" element={<UpSide />} />
          <Route path="/bottom" element={<DownSide />} />
          <Route path="/" element={<FirstLoad />} />
          <Route path="/Home" element={<HomePage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/ask" element={<AskOptionPage />} />
          <Route path="/answer1" element={<DistanceOption />} />
          <Route path="/answer2" element={<CategoryOption />} />
          <Route path="/rullet" element={<RulletPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
