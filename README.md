# 봉천코딩야학

어제보다 나은 개발자가 되자!!  
봉천코딩야학에 오신걸 환영합니다.

### 개발 환경

| Type            | Skill                        | Description                 | Port / Path |
| --------------- | ---------------------------- | --------------------------- | ----------- |
| client          | `react.js`                   | 프론트엔드 연습용 웹 페이지 | 3000        |
| server          | `nest.js / sqlite / typeorm` | 백엔드 학습용 서버          | 8000        |
| API Docs (TODO) | `swagger`                    | API 문서                    | 8000 / docs |

### 학습 챕터

- clone을 이용하지 말고 fork를 이용해 학습자의 저장소에서 작업을 해주세요.
- 각 챕터의 README.md를 꼭 읽고 작업을 해주세요.
- 작업이 완료되면 PR 요청을 해주세요.
- 작업은 master 브렌치가 아니라 각 챕터로 이동한 후에 아래 과정들을 수행해주세요.

### 패키지 설치

```sh
터미널에서, npm install ✅ #root 경로에서도 모듈 설치 필요
터미널에서 client 폴더로 이동 후, npm install ✅
터미널에서 server 폴더로 이동 후, npm install ✅
```

### 명령어 실행

```sh
터미널 root 경로에서 npm start # client와 server가 동시에 구동
```

### 더미 데이터 삽입

1. npm start 명령어를 이용해서 client와 server 구동.
1. vscode 확장플러그인에서 SQLite 설치.
1. server 폴더에 위치한 create-seed.sql 파일을 열고 오른쪽 마우스를 누르면 나타나는 메뉴에서 run Query 클릭.
1. 상단 팔레트 창에서 server/db.sqlite 선택. (server가 구동중인 상태여야 나타남)

### API 문서 (TODO)

서버가 켜진 상태에서 http://localhost:8000/docs
