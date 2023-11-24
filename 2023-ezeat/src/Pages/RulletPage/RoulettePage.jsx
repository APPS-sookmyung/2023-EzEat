import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";
import * as S from "./RoulettePage.style";

const initialData = [{ option: "치킨" }, { option: "피자" }, { option: "꽝" }];

const truncateText = (text, maxLength) => {
  return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
};

const RoulettePage = () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState("");
  const [data, setData] = useState(initialData);

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  };

  const handleAddMenuClick = () => {
    const newMenu = prompt("새로운 메뉴를 입력하세요:");
    if (newMenu) {
      setData([...data, { option: newMenu }]);
    }
  };

  return (
    <S.Container>
      <S.Title> 오늘의 룰렛 </S.Title>
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        spinDuration={[0.2]}
        data={data.map((item) => ({
          ...item,
          option: truncateText(item.option, 8),
        }))}
        outerBorderColor={["#4C3D1C"]}
        outerBorderWidth={[12]}
        backgroundColors={["#FFD357", "#FFDD7E", "#FFEEC7", "#F6E6C2"]}
        radiusLineColor={["white"]}
        radiusLineWidth={[1]}
        onStopSpinning={() => {
          setMustSpin(false);
        }}
        style={{ transform: "rotate(-30deg)" }}
      />
      <S.ReviseBtn onClick={handleAddMenuClick}>메뉴 수정하기</S.ReviseBtn>
      <S.MenuTitle>오늘의 메뉴:</S.MenuTitle>
      <S.MenuBox>
        <S.MenuContent>
          {prizeNumber !== "" ? data[prizeNumber].option : ""}
        </S.MenuContent>
      </S.MenuBox>
      <S.RotateBtn onClick={handleSpinClick}>
        <S.Img src="/images/reload.svg" />
        <S.Content>{!mustSpin ? "돌리기" : "돌리는중..."}</S.Content>
      </S.RotateBtn>
    </S.Container>
  );
};

export default RoulettePage;
