import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; /* 추가: 세로 중앙 정렬 */
  height: 100vh; /* 추가: 최소 높이 설정 */
  display: flex;
  flex-direction: column;
`;

export const SearchBar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 0 5%;
  position: fixed;
  top: 12%;
  margin-left: 10%;
`;

export const SearchBox = styled.div`
  width: 86%;
  background-color: #e7e7e7;
  border-radius: 18px;
`;

export const SearchIcon = styled.img`
  width: 35px;
  float: right;
`;

export const AppContent = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 42%;
height: 100%;
width: 96%;
}
`;

export const Banner = styled.img`
  height: 25%;
  width: 90%;
  border-radius: 14px;
`;

export const AteList = styled.div`
  margin-top: 8%;
  width: 104%;
  height: 96%;
  border-radius: 30px;
  background: linear-gradient(
    180deg,
    #ffcf4a 21.17%,
    rgba(255, 211, 87, 0) 100%
  );
`;

export const Title = styled.div`
  float: left;
  margin-top: 6%;
  margin-left: 6%;
  text-align: left;
  color: #fff;
  font-size: 40px;
`;

export const TitleImg = styled.img`
  margin-left: 12.8%;
  margin-top: 24%;
`;

export const ContentTitleBar = styled.div`
  display: flex;
  background: white;
  width: 190px;
  margin-left: 4%;
  height: 27px;
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
export const MenuList = styled.div`
  display: flex;
  height: 30%;
`;

export const MenuBox = styled.div`
  padding: 4%;
  display: flex;
  flex-direction: column;
  width: 30%;
`;

export const MenuImg = styled.div`
  border: 4px solid white;
  height: 80%;
  border-radius: 16%;
  width: 80%;
`;

export const MenuName = styled.div`
  margin: 0 auto;
`;
