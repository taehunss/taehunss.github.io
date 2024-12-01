import {
  Blank1,
  Blank2,
  BorderLine,
  Container,
  LeftBox,
  List,
  ListItem,
  RightBox,
  SkillTag1,
  SkillTag2,
  SkillTag3,
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
          <Blank2 />
          <Blank2 />
          <TitleH2>Frontend</TitleH2>
        </LeftBox>
        <RightBox>
          <List>
            <ListItem>
              <SkillTag1>NodeJS</SkillTag1>
            </ListItem>
            <ListItem>
              <SkillTag1>NestJS</SkillTag1>
              <SkillTag1>Express</SkillTag1>
            </ListItem>
            <ListItem>
              <SkillTag1>GraphQL</SkillTag1>
              <SkillTag1>TypeORM</SkillTag1>
            </ListItem>
            <ListItem>
              <SkillTag1>Bull</SkillTag1>
              <SkillTag1>rxJS</SkillTag1>
              <SkillTag1>Socket.io</SkillTag1>
            </ListItem>
            <ListItem>
              <SkillTag1>Jest</SkillTag1>
              <SkillTag1>Supertest</SkillTag1>
            </ListItem>
          </List>
          <List>
            <ListItem>
              <SkillTag2>MySQL</SkillTag2>
              <SkillTag2>PostgreSQL</SkillTag2>
              <SkillTag2>MongoDB</SkillTag2>
              <SkillTag2>Redis</SkillTag2>
            </ListItem>
            <ListItem>
              <SkillTag2>AWS VPC</SkillTag2>
              <SkillTag2>AWS ECS</SkillTag2>
              <SkillTag2>AWS ELB</SkillTag2>
              <SkillTag2>AWS S3</SkillTag2>
              <SkillTag2>AWS CloudFront</SkillTag2>
            </ListItem>
            <ListItem>
              <SkillTag2>Docker</SkillTag2>
            </ListItem>
            <ListItem>
              <SkillTag2>ElasticSearch</SkillTag2>
              <SkillTag2>Logstash</SkillTag2>
              <SkillTag2>Kibana</SkillTag2>
            </ListItem>
            <ListItem>
              <SkillTag2>Git</SkillTag2>
              <SkillTag2>Github</SkillTag2>
            </ListItem>
            <ListItem>
              <SkillTag2>Looker Studio</SkillTag2>
            </ListItem>
          </List>
          <List>
            <ListItem>
              <SkillTag3>React</SkillTag3>
              <SkillTag3>React-Native</SkillTag3>
            </ListItem>
            <ListItem>
              <SkillTag3>Typescript</SkillTag3>
              <SkillTag3>Javascript</SkillTag3>
            </ListItem>
            <ListItem>
              <SkillTag3>Apollo-Client</SkillTag3>
            </ListItem>
            <ListItem>
              <SkillTag3>Styled-Component</SkillTag3>
            </ListItem>
          </List>
        </RightBox>
      </Container>
    </>
  );
};
