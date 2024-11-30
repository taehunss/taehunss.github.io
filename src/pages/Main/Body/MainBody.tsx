import { BorderLine } from "src/pages/Common/Common.style";
import { AboutMe } from "./AboutMe/AboutMe";
import * as S from "./MainBody.style";

export const MainBody = () => {
  return (
    <>
      <AboutMe />
      <BorderLine>Career</BorderLine>
      <S.Body>
        <h1>Body</h1>
      </S.Body>
      <BorderLine>Skills</BorderLine>
      <S.Body>
        <h1>Body</h1>
      </S.Body>
      <BorderLine>Achievements</BorderLine>
      <S.Body>
        <h1>Body</h1>
      </S.Body>
    </>
  );
};
