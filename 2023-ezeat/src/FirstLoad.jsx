import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./FirstLoad.style";

function FirstLoad() {
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigate("/home");
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, [navigate]);

  return (
    <S.Background>
      <S.Logo>
        <S.LogoImg src="/images/mainlogo.svg" alt="Logo"></S.LogoImg>
        <S.AppName> EzEat </S.AppName>
      </S.Logo>
    </S.Background>
  );
}

export default FirstLoad;
