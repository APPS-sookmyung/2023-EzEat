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
  height: 20px;
  margin-top: 14px;
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

export const Modal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10;
`;

export const ModalContent = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

export const ModalHeader = styled.div`
  padding: 16px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ModalTitle = styled.h2`
  margin: 0;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #666;
`;

export const ModalBody = styled.div`
  padding: 16px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

export const ModalFooter = styled.div`
  padding: 16px;
  text-align: right;
`;

export const Button = styled.button`
  background: #3498db;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
`;
