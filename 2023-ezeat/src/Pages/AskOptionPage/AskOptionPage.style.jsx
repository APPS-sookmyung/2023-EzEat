import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  algin-items: center;
  justify-content: center;
  background-color: #ffd357;
`;

export const Title = styled.div`
  margin: 40% auto 10%;
  align-items: center;
  font-size: xx-large;
  font-weight: 800;
  text-align: center;
`;

export const Options = styled.div`
  width: 100%;
  height: 100%;
  margin: 20% auto;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const Selection = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const OptionImg = styled.img`
  width: 110%;
  border-radius: 164px;
  border: 5px solid #fff;
  background: #dedede8a 50% / cover no-repeat;
  box-shadow: -3px 4px 5px 0px rgba(0, 0, 0, 0.25);
`;

export const OptionCaption = styled.div`
  font-weight: 600;
  width: 100%;
  margin-top: 12%;
  font-size: small;
  text-align: center;
  margin-left: 10%;
`;

export const NextPage = styled.img`
  margin: 10% auto;
  width: 8%;
`;
