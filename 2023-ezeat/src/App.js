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
import ShopList from "./Pages/ShopListPage/ShopList";
import TypeList from "./Pages/TypeShopListPage/TypeList";
import MenuPage from "./Pages/MenuDetailPage/MenuPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/top" element={<UpSide />} />
          <Route path="/bottom" element={<DownSide />} />
          <Route path="/" element={<FirstLoad />} />
          <Route path="/Home" element={<HomePage />} />
          <Route path="/ask" element={<AskOptionPage />} />
          <Route path="/answer1" element={<DistanceOption />} />
          <Route path="/shops" element={<ShopList />} />
          <Route path="/foodtypeshop" element={<TypeList />} />
          <Route path="/menupage" element={<MenuPage />} />
          {/* 여기까지는 개발완료 */}
          <Route path="/answer2" element={<CategoryOption />} />
          <Route path="/rullet" element={<RulletPage />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
