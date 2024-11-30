import { MainBody } from "./Body/MainBody";
import { MainHeader } from "./Header/MainHeader";
import * as S from "./MainPage.style";
const MainPage = () => {
  return (
    <S.Overlay>
      <S.Container>
        <MainHeader />
        <MainBody />
      </S.Container>
    </S.Overlay>
  );
};

export default MainPage;
