import ProfileImage from "src/assets/profile.png";
import { BorderLine } from "src/pages/Common/Common.style";
import * as S from "./AboutMe.style";
export const AboutMe = () => {
  return (
    <>
      <BorderLine>About Me</BorderLine>
      <S.Container>
        <S.ProfileImage src={ProfileImage} />
        <S.AboutMeDescription>
          NestJS 기반의 3년차 백앤드 개발자 김태훈입니다.
          <br />
          <br />
          환자와 병원을 위한 의료 생태계를 만들어가는 AI 의료 스타트업
          TESSER에서 “내 건강을 책임지는 똑똑한 AI, 온톨" 이라는 모바일 앱
          서비스를 초기부터 현재까지 약 2년 간 백앤드 파트를 전담하여 개발해오고
          있습니다.
          <br />
          <br />
          빠르게 변하는 트랜드에 맞추어 변화하는 비즈니스 요구 사항에 따른
          확장이 용이한 데이터 설계 및 코드 개발에 초점을 맞추어 작업하려고
          하며, 그것을 잘 녹여낼 기술적인 역량(설계 방법, 패턴 등)을 쌓으려
          노력하고 있습니다.
          <br />
          <br />그 외에도 보안과 비용, 성능을 고려한 인프라(AWS), 생산성을 위한
          DevOps 환경, 서비스 운영 안정성을 위한 모니터링 시스템 구축(ELK)
          등에도 힘써왔습니다. 프론트앤드에도 흥미가 있어 사내 백오피스 툴이나
          개인적인 작업물을 이것저것 해보고 있습니다.
        </S.AboutMeDescription>
      </S.Container>
    </>
  );
};
