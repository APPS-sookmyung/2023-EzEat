import React from "react";
import { Link } from "react-router-dom"; // 추가해야 함
import * as S from "./Header.style";

function Header() {
  return (
    <S.Header>
      <S.Logo src="/images/EzEat-icon.png"></S.Logo>
      <Link to="/profile">
        <S.Profile src="/images/user.png"> </S.Profile>
      </Link>
    </S.Header>
  );
}

export default Header;
