import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./DownSide.style";

function DownSide() {
  const navigate = useNavigate();

  function HomeChange() {
    navigate("/home");
  }

  function SearchChange() {
    navigate("/ask");
  }
  function GameChange() {
    navigate("/game");
  }

  return (
    <S.Screen>
      <S.Under>
        <S.Options>
          <S.Icons
            src="/images/home.png"
            alt="Home Icon"
            onClick={HomeChange}
          />
        </S.Options>
        <S.Options>
          <S.Icons
            src="/images/finding.svg"
            alt="Finding Icon"
            onClick={SearchChange}
          />
        </S.Options>
        <S.Options>
          <S.Icons
            src="/images/randomgame.svg"
            alt="Random Game Icon"
            onClick={GameChange}
          />
        </S.Options>
        <S.Options>
          <S.Icons src="/images/isuser.png" alt="Set User Icon" />
        </S.Options>
      </S.Under>
    </S.Screen>
  );
}

export default DownSide;
