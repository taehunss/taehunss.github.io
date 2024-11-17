# 🙇‍♂️ Introduce

<div align="center">width="300" style="border-radius: 50%;"/>
<p>3년차 백앤드 개발자 김태훈입니다.</p>
</div>

# 🛠 Skills

주로 다뤘던 기술 스택에 대해 나열하였습니다.

---

### Application

- **Node.js**
- **Typescript, Javascript,** Python, Java
- **NestJS,** Express
- **GraphQL**, REST API
- **TypeORM**
- Jest
- Socket I.O, RxJS, Bull

### Data store

`mysql`, `postgresql` , `redis` , `mongodb`

### DevOps

- **AWS**
  - EC2, ELB, Route 53, CloudFront, ECS, ECR
  - Elasticash, RDS
  - SQS, SMS, SES
  - Cloudwatch, Lambda

**Docker,** ELK(Elasticsearch, Logstash, Kibana) stack, Github Actions

### Cooperation Tools

Github, notion, JIRA, slack, Asana, Linear

# 🚀 Projects

다양한 프로젝트에 참여하며 제가 맡은 파트에 대해 서술하였습니다.

---

## 온톨

> 2023.06 ~ (현재)

**기능**

- **자동해석**: 결과지를 촬영해 올리면 10분 내에 AI 온톨이가 이해하기 쉽도록 해설을 제공
- AI 챗봇: 무엇이든 질문하면 스트리밍 형태로 답변해주는 AI 챗봇 온톨이
- **건강검진** **챗봇**: 건강검진 결과를 불러오고 챗봇 상담 진행, 결과 요약 보고서 제공(현재 종료)
- **커뮤니티**: 유저 간 게시글 및 댓글 & 좋아요로 소통하는 창구 제공
- **보험상담**: 보험 관련 질문 시 보험 상담사와 연결 제공

**사용 기술**
`nodejs` `typescript` `nestjs` `graphql` `typeorm` `mysql` `redis` `socketio` `rxjs` `passport` `jwt` `jest` `bull` `aws` `winston` `elasticsearch` `logstash` `kibana`
>

### AI **채팅 기능 개발**

*AI 온톨이와 직접 채팅할 수 있는 기능*

- AI 서버, 앱 클라이언트와 통신하는 Socket I.O 서버 구축 및 운영
  - 확장성을 위해 RxJS 기반 유연한 파이프 구조 설계
  - 다중 인스턴스 환경 커넥션 유지를 위한 Sticky session 적용
  - Web socket 보안 통신을 위한 별도 인증/인가 파이프라인 구축
  - 서버 안정성을 위한 커넥션 제어(최대 연결 개수, 커넥션 지속 시간 등)
  - 오류 방지를 위한 예외처리 세분화

### 건강검진 챗봇 기능 개발

*건강보험 공단에서 검진 결과를 불러와 정해진 플로우를 따라 대답해주는 챗봇(현재는 AI 챗봇으로 변경됨)*

- 플로우, 노드 구조 및 정책 설계
  - 관리자 대쉬보드 시스템 설계 및 구현(비개발자도 유연하게 플로우 및 노드 추가, 수정, 삭제 기능)
- AI 요약 보고서 제공(비동기 메세지 큐 처리)

### 보험 상담 기능 개발

*환자의 보험 관련 질문에 보험사가 답변해줄 수 있는 기능*

- 질문 & 답변 및 삭제 로직 구현
- 일별 횟수 제한 기능 구현(Redis & Cron)
- 관리자 대쉬보드 API 구현

### 유저 파트 개발

- JWT 기반 Access & Refresh 인증/인가 로직 구축
- Decorator를 활용한 유저 역할(Role) 체계 구축

### 비기능적 개발

- AWS 보안 인프라 운영
  - ECS, ECR 기반으로 배포 자동화 및 Versioning, 부하 또는 장애 상황에 따른 Autoscaling 환경 구축
  - Cloudwatch, SNS, Lambda 활용, 비상 시 경보 알림 체계 구축
  - 의료 데이터 S3 이미지 접근 보안을 위한 Presigned URL 발급 로직 구축
  - Secret manager 활용, 환경 변수 백업 자동화 및 접근 보안 강화
- 테스트 환경 구축
  - Jest를 활용한 Unit test, E2E test 구현
  - Docker compose와 Github actions를 활용, CI Workflow 내 테스트 자동화
  - Naver nGrinder 활용, 서버 부하 테스트 환경 구축
- 로깅 및 모니터링 시스템 구축
  - Winston 활용, 환경별 로그 레벨별 관리 구조 설계
  - AWS Cloudwatch logs 대쉬보드 시각화
  - ELK(Elasticsearch, Logstash, Kibana) Stack 기반의 Logging system 신규 구축
- 사용자 행동 패턴 분석 및 시각화
  - Looker studio 활용, 클라이언트 이벤트 및 DB 데이터를 활용한 사용자 행동 패턴 분석 및 그래프 작성

        (ex. 요일별, 시간대별 채팅 사용량 분포 등)

### 기획 및 설계 업무

- Figma, Notion 활용, 신규 기획 시 담당 파트에 대한 기능 요구사항 명세서, 유저 스토리, 화면 정의서와 같은 기획 산출물 작성 후 기술 설계(시퀀스 다이어그램, DB 스키마 설계 등) 시작하는 형태로 업무 진행

## **온톨 PoC(국내, 해외)**

> 2022.11 ~ 2023.09

**기능**
2가지 기능을 제공하는 AI 기반 의료 플랫폼(현재 온톨 1.0의 이전 버전)

- **자동해석**: 결과지를 촬영해 올리면 10분 내에 AI 온톨이가 이해하기 쉽도록 해설을 제공하는 기능
- **의사상담**: 환자가 의료인에게 의학 관련 질문을 남기고, 의사가 답변할 수 있는 기능

**사용기술**
`nodejs` `typescript` `nestjs` `graphql` `typeorm` `mysql` `redis`  `bull` `aws` `winston` `passport` `jest`
>

### 자동해석 기능 개발

*검사 결과지를 촬영해 올리면 10분 내에 AI 온톨이가 이해하기 쉽도록 해설을 제공하는 기능*

- 메세지 큐(Bull) 기반 구조 설계 및 구현 → 비동기 처리, 병목 완화, 실패 시 재시도
- S3 Presigned url & cookie 발급 구조로 데이터 보안 강화

### 의사상담 기능 개발

*환자가 의료인에게 의학 관련 질문을 남기고, 의사가 답변할 수 있는 기능*

- 질문 & 답변 및 삭제 로직 구현
- 일별 횟수 제한 기능 구현(Redis & Cron)
- 관리자 대쉬보드 API 구현

### 유저 기능 개발

- Passport 활용, 플랫폼(Naver, Kakao, Google, Apple) 소셜 로그인 구축
- JWT 기반 Access & Refresh 인증/인가 로직 구축

### 개발 문화 정립

- 팀 빌딩 초기 단계 입사하여, 개발팀 개발 문화에 대한 문서 전반 작성
- Linear 도입 및 가이드 문서 작성, 운영(JIRA와 같은 ITS, 추후 JIRA로 변경됨)

## 너두마케터 2.0(외주)

> 2023.09 ~ 2024.02

**기능**
블로그 상단 노출을 위한 데이터 분석 및 원고 생성 도구를 통합 제공하는 마케팅 서비스

**사용 기술**
`nodejs` `typescript` `nestjs` `graphql` `typeorm` `puppeteer` `cheerio` `mysql` `redis` `passport` `jwt` `bull` `aws` `pm2`
>

### 데이터 크롤링 → 저장 → 분석

- Puppeteer와 Cheerio 활용, 네이버 포스팅 원고 크롤링
- DB 적재 및 분석 도구에 활용하도록 로직 구현
- 총 5개의 메인 기능 존재, 기능 요구사항에 맞추어 구현

### 포인트 및 결제 모듈 구축

- 포인트 및 상품, 결제 구조 설계
- 각 기능 트랜젝션 단위 구축

### ETC

- 유저 관련 기능 개발
- Docker compose 활용, 단일 서버 내 간단한 배포 구조 구현
- pm2 기반 무중단 배포 및 모니터링 환경 구축
- github actions CI/CD 구축

### 프로젝트 매니징

- 3인 체제 팀에서 PM 역할을 맡아 Notion, JIRA, Slack, Gather Town 등을 활용하여 스프린트 운영

# 🎓 Educations & Certifications

---

## 인하대학교

- 산업경영공학과 전공
- 빅데이터분석 연계 전공

## 정보처리기사

- 2022.11 취득

관심갖고 읽어주셔서 감사합니다! 🙇‍♂️
