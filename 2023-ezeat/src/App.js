import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import AskOptionPage from "./Pages/AskOptionPage/AskOptionPage";
import CategoryOption from "./Pages/CatagoryOption/CategoryOption";
import DistanceOption from "./Pages/DistanceOption/DistanceOption";
import RoulettePage from "./Pages/RulletPage/RoulettePage";
import FirstLoad from "./FirstLoad";
import Profile from "./Components/Profile";
import UpSide from "./Components/UpSide";
import DownSide from "./Components/DownSide";
import ShopList from "./Pages/ShopListPage/ShopList";
import TypeList from "./Pages/TypeShopListPage/TypeList";
import MenuPage from "./Pages/MenuDetailPage/MenuPage";
import GamePage from "./Pages/RulletPage/GamePage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/top" element={<UpSide />} />
          <Route path="/bottom" element={<DownSide />} />
          <Route path="/" element={<FirstLoad />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/ask" element={<AskOptionPage />} />
          <Route path="/answer1" element={<DistanceOption />} />
          <Route path="/shops" element={<ShopList />} />
          <Route path="/foodtype" element={<TypeList />} />
          <Route path="/menupage" element={<MenuPage />} />
          <Route path="/roullet" element={<RoulettePage />} />
          <Route path="/game" element={<GamePage />} />
          <Route path="/answer2" element={<CategoryOption />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
