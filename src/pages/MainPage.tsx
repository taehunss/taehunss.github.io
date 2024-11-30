import GithubImage from "src/assets/mark-github-24.png";
import * as S from "./MainPage.style";
const MainPage = () => {
  return (
    <S.Container>
      <S.Header>
        <S.HeaderLeftWrapper>
          <S.Name>김태훈</S.Name>
          <S.Job>Backend Developer</S.Job>
        </S.HeaderLeftWrapper>
        <S.HeaderRightWrapper>
          <a
            href="https://github.com/taehunss"
            target="_blank"
            rel="noopener noreferrer"
          >
            <S.GithubImage src={GithubImage} />
          </a>
          <S.EmailAddress>taehun@tesser.io</S.EmailAddress>
        </S.HeaderRightWrapper>
      </S.Header>
      <S.BorderLine>About Me</S.BorderLine>
      <S.Body>
        <h1>Body</h1>
      </S.Body>
      <S.Footer>
        <h1>Footer</h1>
      </S.Footer>
    </S.Container>
  );
};

export default MainPage;
