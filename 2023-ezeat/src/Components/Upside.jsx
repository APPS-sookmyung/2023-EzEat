import * as S from "./Upside.style";
import React from "react";
import { Link } from "react-router-dom";

function Upside() {
  return (
    <S.Screen>
      {/* 상단바 영역 */}
      <S.Container>
        <S.Logo src="/images/toplogo.svg"></S.Logo>
        <Link to="/profile">
          <S.Profile src="/images/user.png"></S.Profile>
        </Link>
      </S.Container>

      {/* 밑에 부분은 하단바 영역 */}

      <S.Under>
        <S.Options>
          {/* <Link to="/Home"> */}
          <S.Icons src="/images/home.png"></S.Icons>
          {/* </Link> */}
        </S.Options>
        <S.Options>
          <Link to="/ask">
            <S.Icons src="/images/restaurant.png"></S.Icons>
          </Link>
        </S.Options>
        <S.Options>
          <Link to="/rullet">
            <S.Icons src="/images/roulette.png"></S.Icons>
          </Link>
        </S.Options>

        <S.Options>
          <Link to="/setting">
            <S.Icons src="/images/settings.png"></S.Icons>
          </Link>
        </S.Options>
      </S.Under>
    </S.Screen>
  );
}
export default Upside;
