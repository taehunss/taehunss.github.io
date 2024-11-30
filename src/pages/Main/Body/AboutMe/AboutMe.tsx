import ProfileImage from "src/assets/profile.png";
import { BorderLine } from "src/pages/Common/Common.style";
import * as S from "./AboutMe.style";
import { AboutMeDescription } from "./AboutMe.text";
export const AboutMe = () => {
  return (
    <>
      <BorderLine>About Me</BorderLine>
      <S.Container>
        <S.ProfileImage src={ProfileImage} />
        <S.AboutMeDescription>{AboutMeDescription}</S.AboutMeDescription>
      </S.Container>
    </>
  );
};
