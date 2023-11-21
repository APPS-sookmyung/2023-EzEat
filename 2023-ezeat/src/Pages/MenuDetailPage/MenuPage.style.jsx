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
  max-height: 100vh;
  width: 100%;
  height: 100%;
  border-top-left-radius: 35px;
  border-top-right-radius: 35px;
  box-shadow: -3px 4px 5px 0px rgba(0, 0, 0, 0.25);
  background: #fff7d9;
`;

export const MenuBox = styled.div`
  height: 132px;

  display: flex;
  flex-direction: row;
  margin-top: 28px;
  margin-left: 26px;
  margin-right: 26px;
  margin-bottom: 10px;
`;

export const MenuImg = styled.img`
  width: 35%;
  padding: 2px;
  border: 2px solid #0000004d;
  border-radius: 5px;
  background: #ffd35769;
`;

export const MenuDetail = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  margin-left: 12px;
  margin-top: 1px;
`;

export const MenuName = styled.div`
  font-weight: 900;
  font-size: large;
`;

export const MenuExplain = styled.div`
  height: 80px;
`;

export const MenuPrice = styled.div`
  color: red;
  font-size: large;
  font-weight: 700;
`;
