import * as S from "./MenuPage.style";
import { useNavigate } from "react-router-dom";

function MenuPage() {
  const navigate = useNavigate();

  function GoBackHandle() {
    navigate(`/shops`);
  }

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
          <S.MenuImg onClick={GoBackHandle} src="/images/vietnoodle.jpg" />
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
