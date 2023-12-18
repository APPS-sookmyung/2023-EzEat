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
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

export const TimeBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justigy-content: center;
`;

export const SingleBox = styled.div`
  width: 55px;
  height: 55px;
  box-shadow: -2px 4px 5px 0px rgba(0, 0, 0, 0.25);
  margin-left: 17px;
  margin-bottom: 30px;
  padding: -10px;
  border-radius: 20px;
  background: rgba(255, 247, 217, 0.75);
`;

export const ImgBox = styled.img`
  width: 30px;
  height: 30px;
  margin-top: 12px;
`;

export const DetailName = styled.div`
  color: black;
  text-align: center;
  margin-top: 14px;
  font-weight: 700;
`;

export const NextPage = styled.img`
  margin: 40% auto;
  width: 8%;
`;
