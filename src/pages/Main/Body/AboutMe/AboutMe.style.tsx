import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ProfileImage = styled.img`
  margin: 30px auto;
  width: 25%;
  height: 100%;
  justify-content: center;
  align-items: center;
  border: none;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const AboutMeDescription = styled.p`
  margin: 20px auto;
  width: 50%;
  text-align: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
