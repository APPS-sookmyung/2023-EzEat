import React from "react";
import { Link } from "react-router-dom";
import * as S from "./Footer.style";

function Footer() {
  return (
    <S.Footer>
      <S.Options>
        <Link to="/Home">
          <S.Icons src="/images/home.png"></S.Icons>
        </Link>
      </S.Options>
      <S.Options>
        <Link to="/ask">
          <S.Icons src="/images/restaurant.png"></S.Icons>
        </Link>
      </S.Options>
      <S.Options>
        <Link to="/rullet">
          <S.Icons src="/images/rullet.png"></S.Icons>
        </Link>
      </S.Options>

      <S.Options>
        <Link to="/setting">
          <S.Icons src="/images/settings.png"></S.Icons>
        </Link>
      </S.Options>
    </S.Footer>
  );
}

export default Footer;
