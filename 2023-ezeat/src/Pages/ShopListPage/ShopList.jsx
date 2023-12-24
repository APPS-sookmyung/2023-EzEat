import React from "react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import * as S from "./ShopList.style";

function ShopList() {
  const navigate = useNavigate();
  const location = useLocation();
  const timeValue = location.state ? location.state.timeValue : null;
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedShop, setSelectedShop] = useState(null);
  const [selectedMenu, setSelectedMenu] = useState(null);

  const restaurantName = [
    "달볶이",
    "버스컵",
    "루다브레드",
    "가문의우동",
    "포라임",
    "맘스터치",
    "포36거리",
    "탕화쿵푸",
    "사이공마켓",
    "정",
    "마포구이마당",
    "신마라명가",
    "네코노스시",
  ];

  const menuList = [
    { id: 1, name: "소고기쌀국수" },
    { id: 2, name: "로스가스" },
    { id: 3, name: "히레가스" },
    { id: 4, name: "포돈정식" },
    { id: 5, name: "감자말이 새우롤 4pcs" },
    { id: 6, name: "필리소스 닭어깨튀김 4pcs" },
    { id: 7, name: "새우춘권 4pcs" },
    { id: 8, name: "어린이 소고기 쌀국수" },
    { id: 9, name: "어린이 미니 히레가스" },
  ];

  const restaurantType = [
    "분식집",
    "분식집",
    "베이커리",
    "일식집",
    "베트남 음식점",
    "패스트푸드점",
    "베트남 음식점",
    "중식집",
    "베트남음식점",
    "중식집",
    "육류점",
    "중식집",
    "일식집",
  ];

  const distance = [
    "213",
    "219",
    "222",
    "250",
    "235",
    "250",
    "259",
    "263",
    "272",
    "275",
    "365",
    "367",
    "367",
    "370",
  ];

  const rating = [
    "4.5",
    "4.8",
    "4.6",
    "4.7",
    "4.7",
    "4.8",
    "4.6",
    "4.8",
    "4.6",
    "4.7",
    "4.7",
    "4.8",
    "4.5",
    "4.7",
  ];

  function HandleDetail() {
    navigate(`/menupage`);
  }

  function HandleGame() {
    navigate(`/game`);
  }

  const handleShopClick = (index) => {
    if (selectedShop === index) {
      setSelectedShop(null);
    } else {
      setSelectedShop(index);
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
        {timeValue}로 갈수 있는
        <br />
        음식점들이에요{" "}
      </S.Title>

      <S.List>
        {restaurantName.map((name, index) => (
          <S.ShopContainer key={index}>
            <S.ShopDetail
              onClick={() => handleShopClick(index)}
              clicked={selectedShop === index}
            >
              <S.Header>
                <S.Distance>{distance[index]}m</S.Distance>
                <S.FoodType>{restaurantType[index]}</S.FoodType>
              </S.Header>

              <S.Body>
                <S.ContentTitleBar>
                  <S.LabelColor></S.LabelColor>
                  <S.ContentTitle>{name}</S.ContentTitle>
                </S.ContentTitleBar>
                <S.Rating>
                  <S.RateImg src="/images/rate.svg" />
                  <S.RateNum>{rating[index]}</S.RateNum>
                </S.Rating>
              </S.Body>

              <S.Bottom>
                <span>{name}</span>
                <span>{restaurantType[index]}</span>
              </S.Bottom>
            </S.ShopDetail>

            <S.DetailBtn>
              <S.NextImg src="/images/detail.svg" />
              <S.BtnName onClick={HandleDetail}>메뉴 상세 정보 보기</S.BtnName>
            </S.DetailBtn>
          </S.ShopContainer>
        ))}

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
              {restaurantName[selectedShop]}에서 <br />
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
export default ShopList;
