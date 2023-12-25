import React from "react";
import UpSideMenu from "../../Components/UpSideMenu";
import DownSide from "../../Components/DownSide";
import RoulettePage from "./RoulettePage";
import * as S from "./GamePage.style";

function GamePage() {
  return (
    <S.Container>
      <div style={{ width: "100%" }}>
        <UpSideMenu />
      </div>
      <div style={{ width: "100%" }}>
        <RoulettePage />
      </div>

      <div style={{ width: "100%" }}>
        <DownSide />
      </div>
    </S.Container>
  );
}
export default GamePage;
