import { useNavigate } from "react-router-dom";
import * as S from "./DistanceOption.style";

function DistanceOption() {
  const navigate = useNavigate();

  const handleTimeBoxClick = (event) => {
    const timeValue = event.currentTarget.firstChild.innerText;
    navigate(`/shops`, { state: { timeValue } });
  };

  return (
    <S.Container>
      <S.Title>
        {" "}
        몇분 거리의 음식점들을
        <br />
        가볼까요?{" "}
      </S.Title>

      <S.TimeContainer>
        <S.TimeBox onClick={handleTimeBoxClick}>
          <S.IsContent>
            <span
              style={{ color: "#FFBC00", fontWeight: "700", fontSize: "40px" }}
            >
              5
            </span>
            <span
              style={{ color: "black", fontWeight: "600", fontSize: "18px" }}
            >
              분 이내
            </span>
          </S.IsContent>
        </S.TimeBox>

        <S.TimeBox onClick={handleTimeBoxClick}>
          <S.IsContent>
            <span
              style={{ color: "#FFBC00", fontWeight: "700", fontSize: "40px" }}
            >
              10
            </span>
            <span
              style={{ color: "black", fontWeight: "600", fontSize: "18px" }}
            >
              분 이내
            </span>
          </S.IsContent>
        </S.TimeBox>

        <S.TimeBox onClick={handleTimeBoxClick}>
          <S.IsContent>
            <span
              style={{ color: "#FFBC00", fontWeight: "700", fontSize: "40px" }}
            >
              15
            </span>
            <span
              style={{ color: "black", fontWeight: "600", fontSize: "18px" }}
            >
              분 이내
            </span>
          </S.IsContent>
        </S.TimeBox>

        <S.TimeBox onClick={handleTimeBoxClick}>
          <S.IsContent>
            <span
              style={{ color: "#FFBC00", fontWeight: "700", fontSize: "40px" }}
            >
              20
            </span>
            <span
              style={{ color: "black", fontWeight: "600", fontSize: "18px" }}
            >
              분 이내
            </span>
          </S.IsContent>
        </S.TimeBox>

        <S.TimeBox onClick={handleTimeBoxClick}>
          <S.IsContent>
            <span
              style={{ color: "#FFBC00", fontWeight: "700", fontSize: "40px" }}
            >
              25
            </span>
            <span
              style={{ color: "black", fontWeight: "600", fontSize: "18px" }}
            >
              분 이내
            </span>
          </S.IsContent>
        </S.TimeBox>

        <S.TimeBox onClick={handleTimeBoxClick}>
          <S.IsContent>
            <span
              style={{ color: "#FFBC00", fontWeight: "700", fontSize: "40px" }}
            >
              60
            </span>
            <span
              style={{ color: "black", fontWeight: "600", fontSize: "18px" }}
            >
              분
            </span>

            <span style={{ color: "red", fontWeight: "600", fontSize: "18px" }}>
              이내
            </span>
          </S.IsContent>
        </S.TimeBox>
      </S.TimeContainer>

      <S.NextPage src="/images/nextpage.png"></S.NextPage>
    </S.Container>
  );
}
export default DistanceOption;
