# 4팀 초급 프로젝트 ViewMyStartup BE

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

### 기술 스택

## 프레임워크 / 언어

express / javascript

## API

REST API

## 데이터베이스

PostgreSQL + Prisma

## 배포 플랫폼

Render.com

## 협업

GitHub

### 주요 라이브러리

| 라이브러리 | 용도                       |
| ---------- | -------------------------- |
| express    | 웹 서버 프레임워크         |
| prisma     | ORM (DB 쿼리)              |
| dotenv     | 환경변수 관리              |
| cors       | CORS 설정                  |
| zod        | 유효성 검사                |
| nanoid     | 고유 ID 생성               |
| faker      | 시드 데이터 생성           |
| nodemon    | 개발 서버 자동 재시작      |
| cross-env  | 환경변수 크로스플랫폼 설정 |

---

## 프로젝트 전반적인 구조

```VIEWMYSTARTUP-BE/
├── http/
├── node_modules/
├── src/
│   ├── controllers/
│   ├── lib/
│   ├── middlewares/
│   ├── models/
│   ├── schemas/
│   ├── service/
│   └── utils/
│   └── app.js
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
```

## src 폴더 하위 구조

| 폴더         | 역할                        |
| ------------ | --------------------------- |
| controllers/ | 요청/응답 처리              |
| lib/         | 외부 라이브러리 설정        |
| middlewares/ | 인증, 에러 처리 등 미들웨어 |
| models/      | DB 모델 정의                |
| schemas/     | 유효성 검사 스키마          |
| service/     | 비즈니스 로직               |
| utils/       | 공통 유틸 함수              |
| app.js       | 앱 진입점                   |
