## 리액트 3주차(심화 주차)

📆 <strong>2022. 08. 05 ~ 08. 11</strong>
<br/>
🧑🏻‍💻 <strong>항해99 8기 E반 8조</strong>

## 🖥 항해 대나무숲

### 프로젝트 링크

- [🎋 항해 대나무숲](https://bamboo-forest.vercel.app/)
  <br />

### 프로젝트 설명

- 📢 항해 중에 힘들었던 점이나 하고싶었던 말을 익명의 힘을 빌려 허심탄회하게 얘기해보자!
- ❌ 물론 상대방에게 불쾌감을 줄 수 있는 표현이나 욕설은 지양하자.

## 🛠 Stack

- <strong>Client</strong>
<p>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=black">
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black">
  <img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=white">
  #61DAFB
</p>

- <strong>UI</strong>

<p>
  <img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">
  <img src="https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=CSS3&logoColor=white">
</p>

- <strong>Server & Deploy</strong>

<p>
  <img src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=Heroku&logoColor=white">
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=Vercel&logoColor=white">
</p>

## ✅ Function

<h3 align="center">홈화면</h3>

- 글쓰기 버튼을 누르면 작성 화면으로 이동합니다.
- 카드 형태로 게시글들이 쌓이게 됩니다.

<img width="1080" alt="스크린샷 2022-08-11 오후 8 48 18" src="https://user-images.githubusercontent.com/97172050/184127257-45710047-8349-4529-a9e7-a7dcb128a5bc.png">

<h3 align="center">작성화면</h3>

- 이름, 게시글 제목, 게시글 내용을 쓰고 체크버튼을 누르면 작성 완료.
- 내용이 하나라도 비어있으면 내용을 써달라는 alert창이 발생합니다.
- X버튼 클릭시 홈 화면으로 다시 이동합니다.

<img width="1080" alt="스크린샷 2022-08-11 오후 8 48 32" src="https://user-images.githubusercontent.com/97172050/184127331-46effb5c-4391-4680-bc5d-f29e180dae15.png">

<h3 align="center">상세화면</h3>

- 이름, 게시글 제목, 게시글 내용을 볼 수 있고 수정 버튼과 삭제 버튼이 뜨게 됩니다.
- 아래에는 댓글을 작성할 수 있습니다. 댓글과 비밀번호를 적고 비밀번호를 적어야만 해당 댓글을 삭제할 수 있습니다.

<img width="1080" alt="스크린샷 2022-08-11 오후 8 49 02" src="https://user-images.githubusercontent.com/97172050/184127411-cdf78bba-2c3d-4edc-bae1-96701d032a02.png">

<h3 align="center">수정화면</h3>

- 게시글 내용을 수정할 수 있습니다.

<img width="1080" alt="스크린샷 2022-08-11 오후 8 49 24" src="https://user-images.githubusercontent.com/97172050/184127465-9227bb23-b9e0-4c0b-9265-e6c42075eae3.png">

## 🧭 File Directory

```bash
/src
  ├── components //컴포넌트 폴더
  │   ├── common //여러 페이지에 공통으로 들어가는 컴포넌트 관리
  │   ├── elements //전역에 사용할 엘리먼트 관리
  │   └── feature //각 기능별 컴포넌트 관리
  │
  ├── fonts //다운로드한 폰트 관리
  │
  ├── hooks //커스텀 훅 관리
  │
  ├── pages //페이지 관리
  │
  ├── redux //리덕스 관리
  │   ├── config //스토어 관리
  │   └── slices //슬라이스 관리
  │
  ├── shared //라우터 관리
  │
  ├── App.js
  └── index.js

```

## 🧑🏻‍💻 Members

| 이름   | 담당 API                     | 역할                      |
| ------ | ---------------------------- | ------------------------- |
| 김영진 | 상세페이지 조회, 수정, 삭제  | 프로젝트 및 깃허브 관리   |
| 문동환 | 댓글 작성, 조회, 수정, 삭제  | 전반적인 트러블 메인 담당 |
| 김수환 | 게시글 작성, 전체페이지 조회 | 전체 UI 담당              |

## ☄️ Trouble Shooting

<details><summary><strong>글 삭제 될 때 댓글까지 삭제되게 하기</strong></summary>

_useSelector로 해당 페이지에서의 댓글을 모두 불러온 후, 삭제 후에 해당페이지는 없어지고 바로 다른 페이지로 이동되기 때문에 미들웨어까지 갈 필요없이 selector에서 받아온 리스트를 map함수로 axios.delete해주었다._

</details>

<details><summary><strong>글 삭제하고 홈으로 돌아갔을때 삭제된 게시글이 그대로 있고, 새로고침 해야 적용되는것</strong>
</summary>

_게시글을 가져와주는 함수를 useEffect로 감싸주고 의존성 배열에 useSelector에서 받아온 값에서 state?.[0]?.id 값을 넣어주어 정확한 값을 넣어줌._

</details>
