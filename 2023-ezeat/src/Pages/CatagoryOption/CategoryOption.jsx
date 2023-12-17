import { useNavigate } from "react-router-dom";
import * as S from "./CategoryOption.style";

function CategoryOption() {
  const navigate = useNavigate();

  const handleTimeBoxClick = (event) => {
    const timeValue = event.currentTarget.firstChild.innerText;
    navigate(`/shops`, { state: { timeValue } });
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
            <S.ImgBox src="/images/vietnoodle.jpg" />
            <S.DetailName>한식</S.DetailName>
          </S.SingleBox>
        </S.TimeBox>

        <S.TimeBox onClick={handleTimeBoxClick}>
          <S.SingleBox>
            <S.ImgBox src="/images/vietnoodle.jpg" />
            <S.DetailName>중식</S.DetailName>
          </S.SingleBox>
        </S.TimeBox>
      </S.TimeContainer>

      <S.NextPage src="/images/nextpage.png"></S.NextPage>
    </S.Container>
  );
}
export default CategoryOption;
