import GithubImage from "src/assets/mark-github-24.png";
import * as S from "./MainHeader.style";

export const MainHeader = () => {
  return (
    <>
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
          <a href="mailto:taehun@tesser.io" style={{ textDecoration: "none" }}>
            <S.EmailAddress>taehun@tesser.io</S.EmailAddress>
          </a>
        </S.HeaderRightWrapper>
      </S.Header>
    </>
  );
};
