import {
  BorderLine,
  Container,
  LeftBox,
  List,
  ListItem,
  Period,
  RightBox,
  TitleH2,
} from "src/pages/Common/Common.style";

export const Career = () => {
  return (
    <>
      <BorderLine>Career</BorderLine>
      <Container>
        <LeftBox>
          <TitleH2>TESSER</TitleH2>
          <Period>2022.11 ~ 현재</Period>
          <TitleH2>Im Web</TitleH2>
          <Period>2022.08 ~ 2022.09</Period>
        </LeftBox>
        <RightBox>
          <TitleH2>온톨 서비스 개발 및 유지보수</TitleH2>
          <List>
            <ListItem>온톨 PoC 개발(2023.01 ~ 2023.10)</ListItem>
            <ListItem>온톨 PoC 해외 버전 개발(2023.05 ~ 2024.07)</ListItem>
            <ListItem>온톨 1.0 개발(2023.10 ~ 현재)</ListItem>
          </List>
          <TitleH2>백앤드 엔지니어 인턴쉽</TitleH2>
          <List>
            <ListItem>
              대용량 트래픽을 고려한 이커머스 백앤드 구축 프로젝트
            </ListItem>
          </List>
        </RightBox>
      </Container>
    </>
  );
};
