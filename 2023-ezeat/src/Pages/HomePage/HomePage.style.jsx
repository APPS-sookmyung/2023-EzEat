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

export const SearchBox = styled.input`
  width: 70%;
  background-color: #e7e7e7;
  border-radius: 18px;
  margin-left: 38px;
  color: white;
  border: none;
  padding-left: 5px;
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
  width: 140px;
  margin-top: 60px;
  margin-left: 50px;
`;

export const ContentTitleBar = styled.div`
  display: flex;
  margin-left: 4%;
  height: 27px;
  flex-direction: row;
  width: 100%;
`;

export const LabelColor = styled.div`
  width: 8px;
  height: 20px;
  background-color: #ffd357;
`;

export const ContentTitle = styled.div`
  margin-top: 2%;
  color: black;
  font-size: small;
  font-weight: 700;
  width: 160px;
  background: white;
  padding-left: 5px;
  height: 20px;
  padding-top: 6px;
`;
export const MenuList = styled.div`
  display: flex;
  height: 30%;
  flex-direction: row;
  width: 95%;
  overflow-y: scroll;
  max-height: 100vh;
  margin-bottom: 10px;
  margin-top: 20px;
  margin-left: 18px;
  flex-wrap: wrap;
`;

export const MenuBox = styled.div`
  padding: 4%;
  display: flex;
  flex-direction: row;
  width: 80px;
  background: white;
  justify-content: space-between;
  height: 15px;
  margin-left: 10px;
  margin-top: 12px;
  border-radius: 10px;
`;

export const MenuImg = styled.img`
  height: 24px;
`;

export const MenuName = styled.div`
  margin: 0 auto;
  color: black;
  font-weight: 700;
`;
