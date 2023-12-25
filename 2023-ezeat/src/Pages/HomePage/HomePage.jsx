import React from "react";
import { useLocation } from "react-router-dom";
import UpSideMenu from "../../Components/UpSideMenu";
import DownSide from "../../Components/DownSide";
import * as S from "./HomePage.style";

function HomePage() {
  const location = useLocation();
  const MenuPick = location.state ? location.state.MenuPick : null;
  const GameResult = location.state ? location.state.GameResult : null;

  return (
    <S.Container>
      <div style={{ width: "100%" }}>
        <UpSideMenu />
      </div>
      <S.SearchBar>
        <S.SearchBox></S.SearchBox>
        <S.SearchIcon src="/images/searchbar.svg"></S.SearchIcon>
      </S.SearchBar>

      <S.AppContent>
        <S.Banner src="/images/banners.jpg" alt="banner" />
        <S.AteList>
          <S.Title>
            {" "}
            <span style={{ fontWeight: "800" }}>근처 맛집, </span> <br />
            이제 쉽게 <br /> 찾아보자!{" "}
          </S.Title>
          <S.TitleImg src="/images/navi-icon.svg"></S.TitleImg>

          <S.ContentTitleBar>
            <S.LabelColor></S.LabelColor>
            <S.ContentTitle>이번달에 먹은 메뉴들이에요!</S.ContentTitle>
          </S.ContentTitleBar>

          <S.MenuList>
            <S.MenuBox>
              <S.MenuImg></S.MenuImg>
              <S.MenuName>
                {MenuPick} {GameResult}{" "}
              </S.MenuName>
            </S.MenuBox>
          </S.MenuList>
        </S.AteList>
      </S.AppContent>

      <div style={{ width: "100%" }}>
        <DownSide />
      </div>
    </S.Container>
  );
}
export default HomePage;
