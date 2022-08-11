# 리액트 3주차(심화 주차)

📆 <strong>2022. 08. 05 ~ 08. 11</strong>
<br/>
🧑🏻‍💻 <strong>항해99 8기 E반 8조</strong>

## 🖥 항해 대나무숲

프로젝트 홈 화면
<br />
프로젝트 설명

## 🛠 Stack

- <strong>Client</strong>
<p>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=black">
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black">
  <img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=white">
</p>

- <strong>UI</strong>

<p>
  <img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">
  <img src="https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=CSS3&logoColor=white">
  <img src="https://img.shields.io/badge/MUI-007FFF?style=for-the-badge&logo=MUI&logoColor=white">
</p>

- <strong>Server & Deploy</strong>

<p>
  <img src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=Heroku&logoColor=white">
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=Vercel&logoColor=white">
</p>

## ✅ Function

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
