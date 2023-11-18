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

export const TimeContainer = styled.div`
  display: flex;
  flex-wrap: wrap; /* 추가: 자식 요소가 공간을 벗어나면 새로운 줄에 배치 */
  justify-content: center;
`;

export const TimeBox = styled.div`
  width: 145px;
  height: 68px;
  border-radius: 10px;
  border: 1.5px solid #000;
  background: #fff7d9;
  box-shadow: -2px 4px 5px 0px rgba(0, 0, 0, 0.25);
  margin-left: 17px;
  margin-bottom: 30px;
  padding: -10px;
`;

export const IsContent = styled.div`
  margin-left: 20%;
`;

export const NextPage = styled.img`
  margin: 40% auto;
  width: 8%;
`;
