import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #ffd357;
`;

export const Title = styled.div`
  margin-top: 20%;
  color: #000;
  margin: 40% auto 10%;
  text-align: center;
  font-size: 30px;
  font-weight: 700;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  flex-wrap: no-wrap;
  max-height: 100vh;
  width: 100%;
  height: 100%;
  border-top-left-radius: 35px;
  border-top-right-radius: 35px;
  box-shadow: -3px 4px 5px 0px rgba(0, 0, 0, 0.25);
  background: #fff7d9;
  max-width: 100vh;
`;

export const MenuBox = styled.div`
  height: 132px;
  display: flex;
  flex-direction: row;
  margin-top: 28px;
  margin-left: 26px;
  margin-right: 26px;
  margin-bottom: 10px;
  width: 100%;
`;

export const MenuDetail = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  margin-top: 1px;
  height: 55px;
  padding-left: 20px;
  padding-top: 10px;
  background: linear-gradient(
    151deg,
    rgba(255, 211, 87, 0.33) 52.34%,
    rgba(255, 255, 255, 0) 119.08%
  );
`;

export const MenuName = styled.div`
  font-weight: 900;
  font-size: large;
`;

export const MenuPrice = styled.div`
  color: red;
  font-size: large;
  font-weight: 700;
`;
