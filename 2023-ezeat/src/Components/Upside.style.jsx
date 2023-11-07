import styled from "styled-components";

export const Screen = styled.div`
  height: 100vh;
  border: solid 1px black;
`;

export const Container = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: row;
  background-color: #ffd357;
  height: 10%;
`;

export const Logo = styled.img`
  width: 54%;
  margin-left: 28%;
  margin-top: 6%;
`;

export const Profile = styled.img`
  width: 44%;
  margin-left: 32%;
  margin-top: 16%;
`;

export const Under = styled.div`
  position: fixed;
  bottom: 0;
  background-color: #ffd357;
  width: 100vh;
  height: 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const Options = styled.div`
  width: 25%;
  text-align: center;
`;

export const Icons = styled.img`
  width: 40px;
  margin: 10px 0;
`;
