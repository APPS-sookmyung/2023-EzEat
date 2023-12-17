import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; /* 추가: 세로 중앙 정렬 */
  height: 100vh; /* 추가: 최소 높이 설정 */
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  font-weight: 600;
  margin-bottom: 20px;
  font-size: x-large;
`;

export const ReviseBtn = styled.div`
  margin-top: 20px;
  font-size: large;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const MenuBox = styled.div`
  margin-top: 10%;
  width: 70%;
  height: 8%;
  border-radius: 21px;
  border: 2px solid #4c3d1c;
  background: #ffd357;
  display: flex;
  align-items: center; /* 수직 가운데 정렬 */
  justify-content: center; /* 수평 가운데 정렬 */
`;

export const MenuTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: -40px;
  margin-top: 30px;
`;

export const MenuContent = styled.div`
  font-size: 23px;
  font-weight: 600;
  text-align: center; /* 가운데 정렬 */
`;

export const Decisions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
`;

export const Img = styled.img`
  width: 20px;
  margin-left: 16px;
  margin-bottom: 2px;
`;

export const Content = styled.div`
  margin-left: 10px;
  margin-top: 6px;
  font-weight: 600;
  text-align: center;
`;

export const DecideBtn = styled.div`
  margin-top: 10%;
  border-radius: 15px;
  border: 2px solid #4c3d1c;
  background: rgba(247, 191, 34, 0.81);
  width: 140px;
  height: 50px;
  display: flex;
  flex-direction: row;
`;
