import * as S from "./MenuPage.style";

function MenuPage() {
  return (
    <S.Container>
      <S.Title>
        {" "}
        선택하신 음식점에서
        <br />
        먹을 수 있는 음식이에요{" "}
      </S.Title>

      <S.List>
        <S.MenuBox>
          <S.MenuImg src="/images/vietnoodle.jpg" />
          <S.MenuDetail>
            <S.MenuName>김치 나베 우동</S.MenuName>
            <S.MenuExplain>메뉴 설명</S.MenuExplain>
            <S.MenuPrice>9,500원</S.MenuPrice>
          </S.MenuDetail>
        </S.MenuBox>
      </S.List>
    </S.Container>
  );
}
export default MenuPage;
