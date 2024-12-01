import {
  Blank1,
  BorderLine,
  Container,
  LeftBox,
  List,
  ListItem,
  ListSubItem,
  RightBox,
  TitleH2,
} from "src/pages/Common/Common.style";

export const Acheivement = () => {
  return (
    <>
      <BorderLine>Achievements</BorderLine>
      <Container>
        <LeftBox>
          <TitleH2>2024</TitleH2>
          <Blank1 />
          <TitleH2>2023</TitleH2>
          <Blank1 />
          <TitleH2>2022</TitleH2>
        </LeftBox>
        <RightBox>
          <List>
            <ListItem>
              온톨 채팅 기능 개발
              <ListSubItem>세부 기능 1</ListSubItem> {/* 하위 항목 추가 */}
              <ListSubItem>세부 기능 2</ListSubItem> {/* 하위 항목 추가 */}
            </ListItem>
          </List>
        </RightBox>
      </Container>
    </>
  );
};
