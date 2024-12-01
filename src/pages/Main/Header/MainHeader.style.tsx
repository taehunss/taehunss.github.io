import styled from "styled-components";

export const Container = styled.div`
  background-color: #2d2d2d;
  color: #ffffff;
  height: 100vh;
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding-top: 30px;
`;

export const HeaderLeftWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
`;

export const HeaderRightWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: flex-end;
`;

export const Name = styled.h1`
  font-size: 28px;
  color: #ffffff;
  margin: 0px 8px;
`;

export const Job = styled.h2`
  font-size: 18px;
  font-weight: 400;
  margin: 0px 10px;
  color: #cccccc;
`;

export const GithubImage = styled.img`
  width: 28px;
  height: 28px;
  margin: 0px 8px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const EmailAddress = styled.text`
  margin: 10px;
  font-size: 18px;
  font-weight: 400;
  color: #cccccc;
  margin: 0px 12px;
  &:hover {
    opacity: 0.8;
  }
`;
