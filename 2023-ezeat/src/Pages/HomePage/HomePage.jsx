import React from "react";
import { useLocation } from "react-router-dom";
import UpSideMenu from "../../Components/UpSideMenu";
import DownSide from "../../Components/DownSide";
import * as S from "./HomePage.style";

function HomePage() {
  const location = useLocation();
  const MenuPick = location.state ? location.state.MenuPick : null;
  const GameResult = location.state ? location.state.GameResult : null;
  const isAdding = MenuPick === null && GameResult === null;

  return (
    <S.Container>
      <div style={{ width: "100%" }}>
        <UpSideMenu />
      </div>
      <S.SearchBar>
        <S.SearchBox placeholder="찾고 싶은 음식점이 있나요?"></S.SearchBox>
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
              <S.MenuImg src="/images/atemark.png"></S.MenuImg>
              <S.MenuName>
                {/* {MenuPick} {GameResult}{" "} */}
                곱창
              </S.MenuName>
            </S.MenuBox>

            <S.MenuBox>
              <S.MenuImg src="/images/atemark.png"></S.MenuImg>
              <S.MenuName>
                {/* {MenuPick} {GameResult}{" "} */}
                김치찌개
              </S.MenuName>
            </S.MenuBox>

            <S.MenuBox>
              <S.MenuImg src="/images/atemark.png"></S.MenuImg>
              <S.MenuName>
                {/* {MenuPick} {GameResult}{" "} */}
                마라탕
              </S.MenuName>
            </S.MenuBox>

            <S.MenuBox>
              <S.MenuImg src="/images/atemark.png"></S.MenuImg>
              <S.MenuName>
                {/* {MenuPick} {GameResult}{" "} */}
                요거트
              </S.MenuName>
            </S.MenuBox>

            <S.MenuBox>
              <S.MenuImg src="/images/atemark.png"></S.MenuImg>
              <S.MenuName style={{ color: isAdding ? "gray" : "black" }}>
                {MenuPick !== null && GameResult !== null
                  ? `${MenuPick} ` || `${GameResult}`
                  : "추가하기"}
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
