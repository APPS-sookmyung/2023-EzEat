/* eslint-disable */

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Wheel } from "react-custom-roulette";
import * as S from "./RoulettePage.style";

const initialData = [{ option: "다시 돌리기!" }];

const truncateText = (text, maxLength) => {
  return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
};

const RoulettePage = () => {
  const navigate = useNavigate();
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState("");
  const [data, setData] = useState(initialData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newMenu, setNewMenu] = useState("");
  const [menuContent, setMenuContent] = useState("");

  useEffect(() => {
    const timerId = setTimeout(() => {
      setMenuContent(prizeNumber !== "" ? data[prizeNumber].option : "");
    }, 3000);

    return () => clearTimeout(timerId);
  }, [prizeNumber, data]);

  const goHomeClick = () => {
    const GameResult = data[prizeNumber].option;
    navigate(`/home`, { state: { GameResult } });
  };

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  };

  const handleAddMenuClick = () => {
    setNewMenu("");
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (e) => {
    setNewMenu(e.target.value);
  };

  const handleAddMenu = () => {
    if (newMenu) {
      setData([...data, { option: newMenu }]);
    }
    setIsModalOpen(false);
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
      {isModalOpen && (
        <S.Modal>
          <S.ModalContent>
            <S.ModalHeader>
              <S.ModalTitle>새로운 메뉴 추가</S.ModalTitle>
              <S.CloseButton onClick={handleCloseModal}>&times;</S.CloseButton>
            </S.ModalHeader>
            <S.ModalBody>
              <S.Label>새로운 메뉴:</S.Label>
              <S.Input
                type="text"
                value={newMenu}
                onChange={handleInputChange}
              />
            </S.ModalBody>
            <S.ModalFooter>
              <S.Button onClick={handleAddMenu}>추가</S.Button>
            </S.ModalFooter>
          </S.ModalContent>
        </S.Modal>
      )}
      <S.MenuTitle>오늘의 메뉴:</S.MenuTitle>
      <S.MenuBox>
        <S.MenuContent>
          <S.MenuContent>{menuContent}</S.MenuContent>
        </S.MenuContent>
      </S.MenuBox>

      <S.Decisions>
        <S.DecideBtn onClick={handleSpinClick}>
          <S.Img src="/images/reload.svg" />
          <S.Content
            style={{ marginTop: "10px", fontSize: "20px", fontWeight: 700 }}
          >
            {!mustSpin ? "돌리기" : "돌리는중.."}
          </S.Content>
        </S.DecideBtn>

        <S.DecideBtn onClick={goHomeClick}>
          <S.Img src="/images/tick.png" />
          <S.Content>
            메뉴 <br />
            확정하기
          </S.Content>
        </S.DecideBtn>
      </S.Decisions>
    </S.Container>
  );
};

export default RoulettePage;
