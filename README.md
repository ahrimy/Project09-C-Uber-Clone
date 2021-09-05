# 🎁 친절한 Woober C

> 왜 나는 편할 수가 있어? 🤔😯
>
> UX를 고려한 친절한 차량 공유 서비스

<div align="center" >

![Logo](https://user-images.githubusercontent.com/26592306/101877408-4c587000-3bd1-11eb-9648-e51334a03d2d.png)

![TypeScript](https://img.shields.io/badge/Typescript-v4.0.5-blue?logo=typescript)
![react](https://img.shields.io/badge/React-v17.0.1-blue?logo=React)
![redux](https://img.shields.io/badge/redux-^4.0.5-blueviolet?logo=redux)
![apollo-client](https://img.shields.io/badge/apollo%20client-3.2.6-e10098?logo=apollo-graphql)
![antd-mobile](https://img.shields.io/badge/antd%20mobile-2.3.4-lightgrey?logo=ant-design)

![NodeJS](https://img.shields.io/badge/node.js-v14.15.1-green?logo=Node.js)
![Express](https://img.shields.io/badge/Express-v4.17.1-000)
![GraphQL](https://img.shields.io/badge/grapqhql-v15.4.0-e10098?logo=graphql)
![apollo-server-express](https://img.shields.io/badge/apollo%20server%20express-2.19.0-e10098?logo=apollo-graphql)
![MongoDB](https://img.shields.io/badge/mongodb-v3.6.3-13aa52?logo=mongodb)

</div>

## 프로젝트 소개

✅  Google Maps API 를 이용한 위치 조회, 장소 검색, 경로 조회 

✅  택시 기사와 사용자 간의 실시간 통신을 통한 호출, 응답, 탑승, 하차 알림

✅  매칭된 택시 기사와 사용자 간의 실시간 위치 공유

✅  모바일 기반의 웹 서비스

<br />

## [🚨 배포 링크](https://woober.netlify.app)

- google maps api key 만료되어 정상 동작하지 않을 수 있습니다.

## 🌟 실행 화면

<div style="margin-left:25px;">
<img width="200" alt="메인 화면" src="https://user-images.githubusercontent.com/26592306/132131098-bf979235-ffb5-43a9-bcde-c1bfb9fe7085.png">
<details>
    <summary><b> 경로 설정 </b></summary>
    <table>
        <tbody>
            <tr>
                <td>현재 위치</td>
                <td>핀 이동</td>
                <td>장소 검색</td>
            </tr>
            <tr>
                <td><img src="https://user-images.githubusercontent.com/26592306/132130050-650365aa-d5a7-4722-92cc-ab4a79bdb572.gif"/></td>
                <td><img src="https://user-images.githubusercontent.com/26592306/132130043-41ec63e6-6825-4565-a61a-c238019ddae9.gif"/></td>
                <td><img src="https://user-images.githubusercontent.com/26592306/132130034-a7a01bb7-cd14-4940-a64a-8921a28c48ee.gif"/></td>
            </tr>
        </tbody>
    </table>
</details>
<details>
    <summary><b> 호출 요청 </b></summary>
    <img src="https://user-images.githubusercontent.com/26592306/132130748-cc7bb252-e5df-42f5-a12f-c04f50c5ed2f.gif" />
</details>
<details>
    <summary><b> 요청 수락 </b></summary>
    <img src="https://user-images.githubusercontent.com/26592306/132130742-8bd714c2-d263-43b8-b3c5-a058e352dbdb.gif" />
</details>
<details>
    <summary><b> 호출 취소 </b></summary>
    <img src="https://user-images.githubusercontent.com/26592306/132130750-9acf4866-0839-4d52-9d69-a6df3e9729c4.gif" />
</details>
<details>
    <summary><b> 픽업 </b></summary>
    <img src="https://user-images.githubusercontent.com/26592306/132130737-799fdcbf-94f6-4a80-81f9-dadab903560e.gif" />
</details>
<details>
    <summary><b> 하차 </b></summary>
    <img src="https://user-images.githubusercontent.com/26592306/132130746-147c4e26-299f-44e4-83ab-6347d1d9100f.gif" />
</details>
</div>

<br />

## 🚀 How to start

```bash
# client
cd client
npm install
npm start
```

```bash
# server
cd server
npm install
npm run dev
```

## 🧬 서비스 구성도

![서비스구성도](https://user-images.githubusercontent.com/52442237/102449533-d4c68d00-4077-11eb-8b3a-a03f3a30fd71.jpg)

## 🗂 디렉토리 구조

```text
.
├── .github
│   ├── ISSUE_TEMPLATE
│   └── workflows
│
├── client
│   ├── dist
│   ├── assets
│   └── src
│       ├── index.html
│       ├── index.tsx
│       ├── App.tsx
│       ├── store.ts
│       ├── components
│       │   ├── containers
│       │   └── presentational
│       ├── routes
│       ├── utils
│       ├── slices
│       ├── constants
│       ├── queries
│       └── pages
│
└── server
    ├── dist
    └── src
        ├── app.ts
        ├── graphql
        │   ├── resolvers
        │   ├── directives
        │   └── types
        ├── passprot
        ├── services
        ├── repositories
        ├── utils
        └── models
```

### 📚 [WIKI](https://github.com/boostcamp-2020/Project09-C-Uber-Clone/wiki)

### 📝 [Issue List](https://docs.google.com/spreadsheets/d/1kpEvOOr6cCK0YKUocBkjjaVOwnI4LHFpKrRn-rYKC90/edit#gid=0)

### 📌 [Road Map](https://docs.google.com/spreadsheets/d/1kpEvOOr6cCK0YKUocBkjjaVOwnI4LHFpKrRn-rYKC90/edit#gid=782776278)

## Member

| 김진관🧑‍💻                                | 박인서🧑‍💻                              | 양아림👩‍💻                             | 이헌준🧑‍💻                            |
| ------------------------------------------ | ---------------------------------------- | ------------------------------------ | -------------------------------------- |
| [@kkole3897](https://github.com/kkole3897) | [@passwd10](https://github.com/passwd10) | [@ahrimy](https://github.com/ahrimy) | [@kkirico](https://github.com/kkirico) |
