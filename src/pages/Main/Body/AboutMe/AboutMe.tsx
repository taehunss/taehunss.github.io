import ReactMarkdown from "react-markdown";
import ProfileImage from "src/assets/profile.png";
import { BorderLine, Container, RightBox } from "src/pages/Common/Common.style";
import { ABOUT_ME } from "./AbountMe";
import * as S from "./AboutMe.style";

export const AboutMe = () => {
  return (
    <>
      <BorderLine>About Me</BorderLine>
      <Container>
        <S.ProfileImage src={ProfileImage} />
        <RightBox>
          <ReactMarkdown>{ABOUT_ME}</ReactMarkdown>
        </RightBox>
      </Container>
    </>
  );
};
