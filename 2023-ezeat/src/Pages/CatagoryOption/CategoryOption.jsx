import { useNavigate } from "react-router-dom";
import * as S from "./CategoryOption.style";

function CategoryOption() {
  const navigate = useNavigate();

  const handleTimeBoxClick = (event) => {
    const FoodValue = event.currentTarget.firstChild.innerText;
    navigate(`/foodtype`, { state: { FoodValue } });
  };

  return (
    <S.Container>
      <S.Title>
        {" "}
        어떤 종류의 음식을
        <br />
        먹어볼까요?{" "}
      </S.Title>

      <S.TimeContainer>
        <S.TimeBox onClick={handleTimeBoxClick}>
          <S.SingleBox>
            <S.ImgBox src="/images/gimbap.png" />
            <S.DetailName>한식</S.DetailName>
          </S.SingleBox>
        </S.TimeBox>

        <S.TimeBox onClick={handleTimeBoxClick}>
          <S.SingleBox>
            <S.ImgBox src="/images/sushi.png" />
            <S.DetailName>일식</S.DetailName>
          </S.SingleBox>
        </S.TimeBox>

        <S.TimeBox onClick={handleTimeBoxClick}>
          <S.SingleBox>
            <S.ImgBox src="/images/dumpling.png" />
            <S.DetailName>중식</S.DetailName>
          </S.SingleBox>
        </S.TimeBox>

        <S.TimeBox onClick={handleTimeBoxClick}>
          <S.SingleBox>
            <S.ImgBox src="/images/spaghetti.png" />
            <S.DetailName>양식</S.DetailName>
          </S.SingleBox>
        </S.TimeBox>

        <S.TimeBox onClick={handleTimeBoxClick}>
          <S.SingleBox>
            <S.ImgBox src="/images/beer.png" />
            <S.DetailName>주류</S.DetailName>
          </S.SingleBox>
        </S.TimeBox>

        <S.TimeBox onClick={handleTimeBoxClick}>
          <S.SingleBox>
            <S.ImgBox src="/images/rice.png" />
            <S.DetailName>밥</S.DetailName>
          </S.SingleBox>
        </S.TimeBox>

        <S.TimeBox onClick={handleTimeBoxClick}>
          <S.SingleBox>
            <S.ImgBox src="/images/ramen.png" />
            <S.DetailName>면</S.DetailName>
          </S.SingleBox>
        </S.TimeBox>

        <S.TimeBox onClick={handleTimeBoxClick}>
          <S.SingleBox>
            <S.ImgBox src="/images/salad.png" />
            <S.DetailName>비건</S.DetailName>
          </S.SingleBox>
        </S.TimeBox>

        <S.TimeBox onClick={handleTimeBoxClick}>
          <S.SingleBox>
            <S.ImgBox src="/images/lunch-box.png" />
            <S.DetailName>간편식</S.DetailName>
          </S.SingleBox>
        </S.TimeBox>

        <S.TimeBox onClick={handleTimeBoxClick}>
          <S.SingleBox>
            <S.ImgBox src="/images/bunsik.png" />
            <S.DetailName>분식</S.DetailName>
          </S.SingleBox>
        </S.TimeBox>

        <S.TimeBox onClick={handleTimeBoxClick}>
          <S.SingleBox>
            <S.ImgBox src="/images/bakery.png" />
            <S.DetailName style={{ width: "70px", marginLeft: "-6px" }}>
              베이커리
            </S.DetailName>
          </S.SingleBox>
        </S.TimeBox>

        <S.TimeBox onClick={handleTimeBoxClick}>
          <S.SingleBox>
            <S.ImgBox src="/images/cake.png" />
            <S.DetailName>디저트</S.DetailName>
          </S.SingleBox>
        </S.TimeBox>
      </S.TimeContainer>

      <S.NextPage src="/images/nextpage.png"></S.NextPage>
    </S.Container>
  );
}
export default CategoryOption;
