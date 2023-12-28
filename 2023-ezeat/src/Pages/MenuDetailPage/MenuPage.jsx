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
          <S.MenuDetail>
            <S.MenuName onClick={GoBackHandle}>소고기 쌀국수</S.MenuName>
            <S.MenuPrice>8,000원</S.MenuPrice>
          </S.MenuDetail>
        </S.MenuBox>

        <S.MenuBox>
          <S.MenuDetail>
            <S.MenuName>로스가스</S.MenuName>
            <S.MenuPrice>8,000원</S.MenuPrice>
          </S.MenuDetail>
        </S.MenuBox>

        <S.MenuBox>
          <S.MenuDetail>
            <S.MenuName>히레가스</S.MenuName>
            <S.MenuPrice>9,000원</S.MenuPrice>
          </S.MenuDetail>
        </S.MenuBox>

        <S.MenuBox>
          <S.MenuDetail>
            <S.MenuName>포돈정식</S.MenuName>
            <S.MenuPrice>9,500원</S.MenuPrice>
          </S.MenuDetail>
        </S.MenuBox>

        <S.MenuBox>
          <S.MenuDetail>
            <S.MenuName>새우춘권</S.MenuName>
            <S.MenuPrice>5,000원</S.MenuPrice>
          </S.MenuDetail>
        </S.MenuBox>

        <S.MenuBox>
          <S.MenuDetail>
            <S.MenuName>
              감자말이 <br />
              새우롤
            </S.MenuName>
            <S.MenuPrice>5,500원</S.MenuPrice>
          </S.MenuDetail>
        </S.MenuBox>
      </S.List>
    </S.Container>
  );
}
export default MenuPage;
