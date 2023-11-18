import React from "react";
import UpSide from "../../Components/UpSide";
import DownSide from "../../Components/DownSide";
import * as S from "./HomePage.style";

function HomePage() {
  return (
    <S.Container>
      <div style={{ width: "100%" }}>
        <UpSide />
      </div>
      <S.SearchBar>
        <S.SearchBox></S.SearchBox>
        <S.SearchIcon src="/images/searchbar.svg"></S.SearchIcon>
      </S.SearchBar>

      <S.AppContent>
        <S.Banner> 이번주 타임세일 </S.Banner>

        <S.AteList>
          <S.Title>
            {" "}
            근처 맛집, <br />
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
              <S.MenuName>감자튀김</S.MenuName>
            </S.MenuBox>

            <S.MenuBox>
              <S.MenuImg></S.MenuImg>
              <S.MenuName>쌀국수</S.MenuName>
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
