import { Skill } from "./\bSkill/Skill";
import { AboutMe } from "./AboutMe/AboutMe";
import { Acheivement } from "./Acheivements/Acheivements";
import { Career } from "./Career/Career";

export const MainBody = () => {
  return (
    <>
      <AboutMe />
      <Career />
      <Skill />
      <Acheivement />
      {/* <S.Body>
        <h1>Body</h1>
      </S.Body>
      <BorderLine>Skills</BorderLine>
      <S.Body>
        <h1>Body</h1>
      </S.Body>
      <BorderLine>Achievements</BorderLine>
      <S.Body>
        <h1>Body</h1>
      </S.Body> */}
    </>
  );
};
