import {
  Blank1,
  Blank2,
  BorderLine,
  Container,
  Highlight,
  LeftBox,
  List,
  ListItem,
  ListSubItem,
  RightBox,
  TimeLine,
  TitleH2,
} from "src/pages/Common/Common.style";

export const Acheivement = () => {
  return (
    <>
      <BorderLine>Achievements</BorderLine>
      <Container>
        <LeftBox>
          <TitleH2>2024</TitleH2>
          {Array.from({ length: 20 }).map((_, index) => (
            <TimeLine key={index} />
          ))}
          <TitleH2>2023</TitleH2>
          {Array.from({ length: 20 }).map((_, index) => (
            <TimeLine key={index} />
          ))}
          <TitleH2>2022</TitleH2>
        </LeftBox>
        <RightBox>
          <Blank2 />
          <List>
            <ListItem>
              <Highlight>[온톨 1.0 - Feature] 환자 메모리</Highlight>
              <ListSubItem>
                환자 정보, 의료 기록 등을 추출 및 저장, 버전 관리 시스템 구현
              </ListSubItem>
              <ListSubItem>
                환자 메모리 기반 선톡 스케줄러 기능 구현(Dynamic cron job 활용,
                스케줄)
              </ListSubItem>
            </ListItem>
            <ListItem>
              <Highlight>[온톨 1.0 - Feature] 검사 결과지 해석</Highlight>
              <ListSubItem>
                결과지 분류에 따라 여러 단계를 수행하는 파이프라인 구축
              </ListSubItem>
              <ListSubItem>
                수치 항목을 자세히 보여주는 진단 검사 기능 구현
              </ListSubItem>
              <ListSubItem>온톨 채팅 통합 기능 구현</ListSubItem>
              <ListSubItem>
                Bull queue 활용, 비동기 병렬 처리 및 실패 시 재시도 기능 구현
              </ListSubItem>
            </ListItem>
            <ListItem>
              <Highlight>[온톨 1.0 - Feature] 온톨 채팅</Highlight>
              <ListSubItem>
                실시간 스트리밍 AI 채팅(socket.io, rxjs)
              </ListSubItem>
              <ListSubItem>웹 소켓 커넥션 관리(성능, 보안 등)</ListSubItem>
              <ListSubItem>채팅 데이터 저장 및 조회 성능 최적화</ListSubItem>
              <ListSubItem>
                추천 질문, 검사결과지, 유저 데이터 참고 등 고도화 설계 및 구현
              </ListSubItem>
            </ListItem>
            <ListItem>
              <Highlight>[온톨 1.0 - Feature] 건강검진 분석</Highlight>
              <ListSubItem>
                국가 건강검진 AI 분석 결과 제공 기능 구현
              </ListSubItem>
              <ListSubItem>
                자체 크롤링 서버 구축(기존 CODEF API 기능 대체)
              </ListSubItem>
            </ListItem>
            <ListItem>
              <Highlight>[온톨 1.0 - Feature] 본인인증</Highlight>
              <ListSubItem>다날 문자 인증 API 연동</ListSubItem>
            </ListItem>
            <ListItem>
              <Highlight>
                [온톨 1.0 - Testing] 온톨 1.0 테스트 환경 구축
              </Highlight>
              <ListSubItem>
                유닛 테스트, E2E 테스트 환경 구축 및 테스트 코드 작성(jest,
                Supertest)
              </ListSubItem>
              <ListSubItem>부하 테스트 환경 구축(nGrinder)</ListSubItem>
            </ListItem>

            <Blank1 />
            <ListItem>
              <Highlight>[온톨 1.0 - Launching] 온톨 1.0 런칭</Highlight>
              <ListSubItem>온톨 PoC에서 1.0 버전 런칭</ListSubItem>
              <ListSubItem>
                기획, 설계 등 초기 세팅 및 설계 단계 참여
              </ListSubItem>
            </ListItem>
            <ListItem>
              <Highlight>[온톨 1.0 - DevOps] ELK 스택 구축</Highlight>
              <ListSubItem>
                ELK 스택 로그 수집, 분석, 시각화 기능 구현
              </ListSubItem>
            </ListItem>
            <ListItem>
              <Highlight>[온톨 1.0 - Feature] 건강검진 챗봇(OTL)</Highlight>
              <ListSubItem>
                플로우 기반 검진 결과 분석 챗봇 구현(현재 온톨채팅 구 버전, 현재
                서비스 중단)
              </ListSubItem>
              <ListSubItem>
                관리자 페이지 내 Flow & Node 관리 기능 구현
              </ListSubItem>
            </ListItem>
            <ListItem>
              <Highlight>[온톨 1.0 - Feature] 보험 상담</Highlight>
              <ListSubItem>
                보험 설계사의 보험 상담 제공 기능 구현(현재 서비스 중단)
              </ListSubItem>
            </ListItem>
            <ListItem>
              <Highlight>
                [온톨 해외 PoC - Launching] 온톨 해외 PoC 런칭
              </Highlight>
              <ListSubItem>
                온톨 국내 PoC 기능 해외 버전 구현 및 배포
              </ListSubItem>
            </ListItem>
            <ListItem>
              <Highlight>[온톨 PoC - DevOps] 온톨 PoC 배포 자동화</Highlight>
              <ListSubItem>
                CI/CD 파이프라인 구축(Docker, Github Actions 활용)
              </ListSubItem>
            </ListItem>
            <ListItem>
              <Highlight>[온톨 PoC - Launching] 온톨 PoC 런칭</Highlight>
              <ListSubItem>
                이전 MVP(닥터온톨)에서 PoC 버전 업데이트 및 런칭
              </ListSubItem>
              <ListSubItem>
                기획, 설계 등 초기 세팅 및 설계 단계 참여
              </ListSubItem>
              <ListSubItem>
                자동해석 기능 구현(현재 온톨 1.0으로 발전)
              </ListSubItem>
            </ListItem>
            <Blank1 />
          </List>
        </RightBox>
      </Container>
    </>
  );
};
