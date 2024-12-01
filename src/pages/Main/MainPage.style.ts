import styled, { createGlobalStyle } from "styled-components";
export const Overlay = styled.div`
  background-color: #2d2d2d;
`;

export const Container = styled.div`
  background-color: #2d2d2d;
  color: #ffffff;
  height: 100vh;
  width: 75%;
  margin: auto;
  height: auto;
  overflow-y: auto;
  @media (max-width: 768px) {
    width: 95%;
  }
`;
export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #2d2d2d; // 추가: body의 배경색 설정
    margin: 0;
    padding: 0;
  }
`;
