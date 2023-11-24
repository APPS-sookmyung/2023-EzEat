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
  width: 76%;
  height: 100%;
`;

export const ShopContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  height: 26%;
`;

export const ShopDetail = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
  border: 2px solid black;
  height: 200px;
  background: #fff7d9;
  box-shadow: -3px 5px 5px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Distance = styled.div`
  margin-left: 3px;
  // border: 1px solid black;
  width: 30%;
  height: 20px;
  margin-left: 10px;
  font-weight: 600;
`;

export const FoodType = styled.div`
  // border: 1px solid blue;
  width: 24%;
  height: 20px;
  margin-right: 5px;
  font-weight: 600;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: row;
`;
export const ContentTitleBar = styled.div`
  display: flex;
  background: white;
  width: 160px;
  margin-left: 2%;
  height: 38px;
  margin-top: 8px;
`;

export const LabelColor = styled.div`
  width: 8px;
  background-color: #ffd357;
`;

export const ContentTitle = styled.div`
  margin-top: 2%;
  color: black;
  font-size: small;
  font-weight: 700;
  margin-left: 3%;
`;

export const Rating = styled.div`
  margin-left: 4%;
  display: flex;
  flex-direction: row;
`;

export const RateImg = styled.img`
  width: 100%;
  margin-top: 20%;
`;

export const RateNum = styled.div`
  margin-left: 14%;
  margin-top: 32%;
  font-size: larger;
  font-weight: 600;
`;

export const Bottom = styled.div`
  margin-right: 5px;
  // background-color: pink;
  margin-top: 3%;
  height: 34%;
`;

export const DetailBtn = styled.div`
  margin-left: 44%;

  display: flex;
  flex-direction: row;
`;

export const NextImg = styled.img`
  width: 20px;
`;

export const BtnName = styled.div`
  font-weight: 600;
  margin-left: 3px;
`;

export const OptionBtn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 50px;
`;

export const MenuFix = styled.div`
  display: flex;
  flex-direction: row;
  width: 160px;
  height: 60px;
  border-radius: 31.5px;
  background: #ff5a5a;
  box-shadow: -3px 4px 5px 0px rgba(0, 0, 0, 0.25);
`;
export const FixImg = styled.img`
  width: 22%;
  margin-left: 8px;
`;

export const FixBtnName = styled.div`
  width: 80%;
  margin-top: 16px;
  margin-left: 6px;
  font-size: larger;
  font-weight: 700;
  color: white;
`;

export const Rullet = styled.div`
  width: 160px;
  height: 60px;
  border-radius: 31.5px;
  background: #fff;
  box-shadow: -3px 4px 5px 0px rgba(0, 0, 0, 0.25);
  margin-left: 30px;
  font-size: larger;
  font-weight: 700;
`;

export const RulletText = styled.div`
  margin-top: 16px;
  margin-left: 18px;
`;