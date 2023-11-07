import React from "react";
import * as S from "./FirstLoad.style";

function FirstLoad() {
  return (
    <S.Background>
      <S.Logo>
        <S.LogoImg src="/images/mainlogo.svg"></S.LogoImg>
        <S.AppName> EzEat </S.AppName>
      </S.Logo>
    </S.Background>
  );
}

export default FirstLoad;
