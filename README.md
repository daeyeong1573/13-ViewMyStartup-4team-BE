# 4팀 초급 프로젝트 ViewMyStartup BE

## 👥 팀 소개

**{ 4TEAM }**

> 📋 [팀 노션 바로가기](https://www.notion.so/80c2f79de80783a0a284015743ff7fd6?v=0e72f79de80782889de98818b9a2d6e2&source=copy_link)

| 이름   | GitHub                                           |
| ------ | ------------------------------------------------ |
| 김대영 | [@daeyeong1573](https://github.com/daeyeong1573) |
| 김은진 | [@Eznnni](https://github.com/Eznnni)             |
| 채지훈 | [@jihun-chae](https://github.com/jihun-chae)     |
| 안미영 | [@ANNDAILY](https://github.com/ANNDAILY)         |

---

## 📌 프로젝트 소개

> 최근에는 벤처 캐피탈에 비해 개인 투자자들의 스타트업에 대한 관심이 증가하고 있습니다.
> 하지만 스타트업에 관한 정보 접근성에는 여전히 큰 격차가 존재합니다.
> 이러한 상황을 개선하기 위해, 개인 투자자들이 스타트업을 선택하여 그들의 누적 투자 금액, 매출액 등을 확인하고 비교할 수 있는 모의 투자 서비스를 제작합니다.

**제작 기간** : 2026. 05. 18 ~ 2026. 06. 08

---

## 🛠 기술 스택

| 구분                     | 기술                   |
| ------------------------ | ---------------------- |
| **Framework / Language** | Express.js, JavaScript |
| **API**                  | REST API               |
| **Database**             | PostgreSQL, Prisma ORM |
| **배포**                 | Render.com             |
| **협업**                 | GitHub                 |

---

## 🌐 구현 홈페이지

> [https://13-view-my-startup-4team-fe.vercel.app/](https://13-view-my-startup-4team-fe.vercel.app/)

---

## 👨‍💻 팀원별 구현 기능 상세

### 김대영

**BE 초기 세팅**

- Prisma 스키마 작성
- package.json 셋업
- 폴더 구조 설계
- .env 환경변수 설정

**Utils**

- `asyncHandler` — try/catch 중앙화로 컨트롤러 에러 처리 간소화
- `errors` — 커스텀 에러 클래스 (AppError, NotFoundError, ValidationError 등) 정의
- `serialize` — Prisma BigInt 직렬화 유틸 분리 (BigInt → String 변환)

| Method | Endpoint          | 기능                      |
| ------ | ----------------- | ------------------------- |
| `GET`  | `/startups`       | 전체 스타트업 리스트 조회 |
| `POST` | `/compare`        | 비교 선택 저장            |
| `GET`  | `/compare/result` | 비교 결과 조회            |

---

### 김은진

| Method   | Endpoint           | 기능                    |
| -------- | ------------------ | ----------------------- |
| `GET`    | `/startups/:id`    | 특정 스타트업 상세 조회 |
| `GET`    | `/compare/status`  | 비교 현황 조회          |
| `POST`   | `/investments`     | 가상 투자 생성          |
| `PATCH`  | `/investments/:id` | 가상 투자 수정          |
| `DELETE` | `/investments/:id` | 가상 투자 삭제          |

---

### 안미영

| Method | Endpoint       | 기능           |
| ------ | -------------- | -------------- |
| `GET`  | `/investments` | 투자 현황 조회 |

---

## 브랜치 전략

| 브랜치    | 설명               |
| --------- | ------------------ |
| `main`    | 기준 브랜치        |
| `release` | 배포 브랜치        |
| `dev`     | 통합 테스트 브랜치 |
| `feat/*`  | 기능 개발 브랜치   |

### 브랜치 흐름

```
feat/* → dev → release
```

### 브랜치 규칙

- **feat/**: 기능 개발 시 `dev` 브랜치에서 분기하여 작업합니다.

```bash
git checkout dev
git checkout -b feat/기능명
```

- **dev**: 각 기능 개발 완료 후 PR을 통해 병합하고 통합 테스트를 진행합니다.
- **release**: 테스트가 완료된 `dev` 브랜치를 병합하여 배포합니다.

---

## 커밋 컨벤션

| 타입       | 설명                 |
| ---------- | -------------------- |
| `feat`     | 새로운 기능 추가     |
| `fix`      | 버그 수정            |
| `docs`     | 문서 수정            |
| `refactor` | 코드 리팩토링        |
| `chore`    | 빌드, 설정 파일 수정 |

**예시**

```
feat: 게시글 등록 API 추가
fix: 댓글 목록 조회 필터 오류 수정
docs: API 명세서 업데이트
```

---

## 📁 프로젝트 구조

```
VIEWMYSTARTUP-BE/
├── http/
├── src/
│   ├── controllers/
│   ├── lib/
│   ├── middlewares/
│   ├── schemas/
│   ├── service/
│   ├── utils/
│   └── app.js
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
```

### src 폴더 하위 구조

| 폴더           | 역할                        |
| -------------- | --------------------------- |
| `controllers/` | 요청/응답 처리              |
| `lib/`         | 외부 라이브러리 설정        |
| `middlewares/` | 인증, 에러 처리 등 미들웨어 |
| `schemas/`     | 유효성 검사 스키마          |
| `service/`     | 비즈니스 로직               |
| `utils/`       | 공통 유틸 함수              |
| `app.js`       | 앱 진입점                   |

---

## 📦 주요 라이브러리

| 라이브러리  | 용도                       |
| ----------- | -------------------------- |
| `express`   | 웹 서버 프레임워크         |
| `prisma`    | ORM (DB 쿼리)              |
| `dotenv`    | 환경변수 관리              |
| `cors`      | CORS 설정                  |
| `zod`       | 유효성 검사                |
| `nanoid`    | 고유 ID 생성               |
| `faker`     | 시드 데이터 생성           |
| `nodemon`   | 개발 서버 자동 재시작      |
| `cross-env` | 환경변수 크로스플랫폼 설정 |

---

## 📝 프로젝트 개인문서

| 이름   | 링크                                                                                     |
| ------ | ---------------------------------------------------------------------------------------- |
| 김대영 | [개인문서 보기](https://www.notion.so/4cd2f79de80783daa4ab01a9e2d331e3?source=copy_link) |
| 김은진 | [개인문서 보기](https://www.notion.so/3642f79de807809da6fcf7dd16aff300?source=copy_link) |
| 안미영 | [개인문서 보기](https://www.notion.so/3642f79de8078040a810ec99abe5c6b3?source=copy_link) |
| 채지훈 | [개인문서 보기](https://www.notion.so/3642f79de8078083a2d1f69920d3c421?source=copy_link) |
