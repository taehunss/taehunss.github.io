import {
  Blank1,
  BorderLine,
  Container,
  LeftBox,
  List,
  ListItem,
  RightBox,
  TitleH2,
} from "src/pages/Common/Common.style";

export const Skill = () => {
  return (
    <>
      <BorderLine>Skill</BorderLine>
      <Container>
        <LeftBox>
          <TitleH2>Backend</TitleH2>
          <Blank1 />
          <TitleH2>DevOps</TitleH2>
          <Blank1 />
          <TitleH2>Frontend</TitleH2>
        </LeftBox>
        <RightBox>
          <List>
            <ListItem>NodeJS(Typescript)</ListItem>
            <ListItem>NestJS, Express</ListItem>
            <ListItem>GraphQL, TypeORM</ListItem>
            <ListItem>Bull, rxJS, Socket.io</ListItem>
            <ListItem>Jest</ListItem>
          </List>
          <List>
            <ListItem>MySQL, PostgreSQL, MongoDB, Redis</ListItem>
            <ListItem>
              AWS(VPC, ECS, S3, SQS, Secrets Manager, CloudWatch, CloudFront)
            </ListItem>
            <ListItem>Docker</ListItem>
            <ListItem>ElasticSearch, Logstash, Kibana, FluentBit</ListItem>
            <ListItem>Git, Github</ListItem>
          </List>
          <List>
            <ListItem>React, React-Native</ListItem>
            <ListItem>Typescript, Javascript</ListItem>
            <ListItem>Apollo-Client</ListItem>
            <ListItem>Styled-Component</ListItem>
          </List>
        </RightBox>
      </Container>
    </>
  );
};
