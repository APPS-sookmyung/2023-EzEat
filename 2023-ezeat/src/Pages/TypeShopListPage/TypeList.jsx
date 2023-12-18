import React from "react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import * as S from "./TypeList.style";

function TypeList() {
  const navigate = useNavigate();
  const location = useLocation();
  const FoodValue = location.state ? location.state.FoodValue : null;
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedShop, setSelectedShop] = useState(null);
  const [selectedMenu, setSelectedMenu] = useState(null);

  const restaurantName = "음식점A";

  const menuList = [
    { id: 1, name: "불고기" },
    { id: 2, name: "치킨" },
    { id: 3, name: "양념치킨" },
  ];

  function HandleDetail() {
    navigate(`/menupage`);
  }

  function HandleGame() {
    navigate(`/game`);
  }

  const handleShopClick = (contentTitle) => {
    if (selectedShop === contentTitle) {
      setSelectedShop(null);
    } else {
      setSelectedShop(contentTitle);
    }
  };

  function MenuModal() {
    setModalOpen(true);
  }

  const handleMenuSelect = (menu) => {
    setSelectedMenu(menu);
    setModalOpen(false);
    const MenuPick = menu.name;
    navigate("/home", { state: { MenuPick } });
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <S.Container>
      <S.Title>
        {" "}
        {FoodValue} 파는
        <br />
        음식점들이에요{" "}
      </S.Title>

      <S.List>
        <S.ShopContainer>
          <S.ShopDetail
            onClick={() => handleShopClick(restaurantName)}
            clicked={selectedShop === restaurantName}
          >
            <S.Header>
              <S.Distance>300m</S.Distance>
              <S.FoodType>일식</S.FoodType>
            </S.Header>

            <S.Body>
              <S.ContentTitleBar>
                <S.LabelColor></S.LabelColor>
                <S.ContentTitle>{restaurantName}</S.ContentTitle>
              </S.ContentTitleBar>
              <S.Rating>
                <S.RateImg src="/images/rate.svg" />
                <S.RateNum>4.8</S.RateNum>
              </S.Rating>
            </S.Body>

            <S.Bottom>음식점에 대한 설명</S.Bottom>
          </S.ShopDetail>

          <S.DetailBtn>
            <S.NextImg src="/images/detail.svg" />
            <S.BtnName onClick={HandleDetail}>메뉴 상세 정보 보기</S.BtnName>
          </S.DetailBtn>
        </S.ShopContainer>

        <S.OptionBtn>
          <S.MenuFix onClick={MenuModal}>
            <S.FixImg src="/images/menufix.svg" />
            <S.FixBtnName>메뉴 확정</S.FixBtnName>
          </S.MenuFix>
          <S.Rullet>
            <S.RulletText onClick={HandleGame}>룰렛 돌리기</S.RulletText>
          </S.Rullet>
        </S.OptionBtn>
      </S.List>

      {isModalOpen && (
        <S.ModalOverlay>
          <S.ModalContent>
            <S.ModalTitle>
              {" "}
              {selectedShop}에서 <br />
              먹을 수 있는 음식들이에요.
            </S.ModalTitle>
            <S.CloseButton onClick={handleCloseModal}>X</S.CloseButton>

            <S.MenuContainer>
              {menuList.map((menu) => (
                <S.Menus key={menu.id} onClick={() => handleMenuSelect(menu)}>
                  {menu.name}
                </S.Menus>
              ))}
            </S.MenuContainer>
          </S.ModalContent>
        </S.ModalOverlay>
      )}
    </S.Container>
  );
}
export default TypeList;
