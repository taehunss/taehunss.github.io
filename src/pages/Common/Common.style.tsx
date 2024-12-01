import styled from "styled-components";

export const BorderLine = styled.div`
  width: 97%;
  border-bottom: 1px solid #ffffff;
  margin: 0 auto;
  text-align: center;
  font-size: 28px;
  font-weight: 800;
  padding: 10px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LeftBox = styled.div`
  margin: 20px auto;
  width: 25%;
  height: 100%;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    display: none;
  }
`;
export const RightBox = styled.p`
  margin: 20px auto;
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const TitleH1 = styled.h1`
  font-size: 32px;
  font-weight: 800;
`;

export const TitleH2 = styled.h2`
  font-size: 24px;
  font-weight: 800;
`;

export const TitleH3 = styled.h3`
  font-size: 20px;
  font-weight: 800;
`;
export const Blank1 = styled.div`
  width: 100%;
  height: 36px;
`;

export const Blank2 = styled.div`
  width: 100%;
  height: 24px;
`;

export const Blank3 = styled.div`
  width: 100%;
  height: 20px;
`;

export const TimeLine = styled.div`
  width: 0%;
  height: 10px;
  border: 0.2px solid #808080;
  margin: 3px auto;
`;

export const Period = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #808080;
`;

export const Description = styled.p`
  text-align: center;
`;

export const List = styled.ul`
  text-align: left;
`;

export const ListItem = styled.li`
  text-align: left;
  font-size: 16px;
  font-weight: 700;
`;

export const SkillTag = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: #ffffff;
  margin: 3px 4px;
  padding: 1px 6px;
  border-radius: 4px;
`;

export const SkillTag1 = styled(SkillTag)`
  background-color: #003860;
`;
export const SkillTag2 = styled(SkillTag)`
  background-color: #5d007c;
`;
export const SkillTag3 = styled(SkillTag)`
  background-color: #085d00;
`;

//하위 아이템
export const ListSubItem = styled.li`
  text-align: left;
  font-size: 16px;
  font-weight: 400;
  margin-left: 20px; // 들여쓰기 추가
`;

export const Highlight = styled.span`
  color: #2aa2f5;
`;
