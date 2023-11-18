import * as S from "./DownSide.style";
import React from "react";

function Downside() {
  return (
    <S.Screen>
      <S.Under>
        <S.Options>
          <S.Icons src="/images/home.png" alt="Home Icon" />
        </S.Options>
        <S.Options>
          <S.Icons src="/images/finding.svg" alt="Finding Icon" />
        </S.Options>
        <S.Options>
          <S.Icons src="/images/randomgame.svg" alt="Random Game Icon" />
        </S.Options>
        <S.Options>
          <S.Icons src="/images/setmenu.svg" alt="Set Menu Icon" />
        </S.Options>
      </S.Under>
    </S.Screen>
  );
}

export default Downside;
