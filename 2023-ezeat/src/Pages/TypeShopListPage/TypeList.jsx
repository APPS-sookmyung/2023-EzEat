import * as S from "./TypeList.style";

function TypeList() {
  return (
    <S.Container>
      <S.Title>
        {" "}
        선택하신 종류를
        <br />
        파는 음식점들이에요{" "}
      </S.Title>

      <S.List>
        <S.ShopContainer>
          <S.ShopDetail>
            <S.Header>
              <S.Distance>300m</S.Distance>
              <S.FoodType>일식</S.FoodType>
            </S.Header>

            <S.Body>
              <S.ContentTitleBar>
                <S.LabelColor></S.LabelColor>
                <S.ContentTitle>음식점 이름</S.ContentTitle>
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
            <S.BtnName>매뉴 상세 정보 보기</S.BtnName>
          </S.DetailBtn>
        </S.ShopContainer>

        <S.OptionBtn>
          <S.MenuFix>
            <S.FixImg src="/images/menufix.svg" />
            <S.FixBtnName>메뉴 확정</S.FixBtnName>
          </S.MenuFix>
          <S.Rullet>
            <S.RulletText>룰렛 돌리기</S.RulletText>
          </S.Rullet>
        </S.OptionBtn>
      </S.List>
    </S.Container>
  );
}
export default TypeList;
