import { AboutMe } from "./AboutMe/AboutMe";
import { Acheivement } from "./Acheivements/Acheivements";
import { Career } from "./Career/Career";
import { Skill } from "./Skill/Skill";

export const MainBody = () => {
  return (
    <>
      <AboutMe />
      <Career />
      <Skill />
      <Acheivement />
    </>
  );
};
