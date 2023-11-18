import * as S from "./UpSide.style";
import React from "react";
import { Link } from "react-router-dom";

function UpSide() {
  return (
    <S.Screen>
      <S.Container>
        <S.Logo src="/images/toplogo.svg"></S.Logo>
        <Link to="/profile">
          <S.Profile src="/images/user.png"></S.Profile>
        </Link>
      </S.Container>
    </S.Screen>
  );
}
export default UpSide;
