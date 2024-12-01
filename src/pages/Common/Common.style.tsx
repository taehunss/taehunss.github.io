import styled from "styled-components";

export const BorderLine = styled.div`
  width: 97%;
  border-bottom: 1px solid #ffffff;
  margin: 0 auto;
  text-align: center;
  font-size: 28px;
  font-weight: 400;
  padding: 10px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

export const LeftBox = styled.div`
  margin: 20px auto;
  width: 25%;
  height: 100%;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const RightBox = styled.p`
  margin: 20px auto;
  width: 50%;
`;

export const TitleH1 = styled.h1`
  font-size: 32px;
  font-weight: 400;
`;

export const TitleH2 = styled.h2`
  font-size: 24px;
  font-weight: 500;
`;

export const TitleH3 = styled.h3`
  font-size: 20px;
  font-weight: 500;
`;

export const Period = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #808080;
`;

export const Description = styled.p`
  text-align: center;
`;

export const DescriptionList = styled.ul`
  text-align: left;
`;

export const DescriptionListItem = styled.li`
  text-align: left;
`;
