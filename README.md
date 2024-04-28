# KDT_FE7_Mini-Project

- `Hyubang` : 국내의 모텔, 호텔, 펜션 등 다양한 형태의 숙소를 한눈에 조회하고 예약까지 할 수 있는 `플랫폼` 페이지
- 숙소 예약 플랫폼
- 숙소 예약을 위한 여러 기능이 있습니다.
- 배포링크 : https://fast-campus-mini-project.vercel.app/main

<br>

## 💻 프로젝트 소개

제작기간 : 2024.03.18 ~ 2024.04.05 <br>
제작인원 : FE_3명, BE_3명

#### 📌 주요기능

- `회원가입` `로그인` 기능
- 데이터 베이스에 저장된 `전체상품목록조회` 제공
- 특정 상품 ID 클릭 시 데이터 베이스에 저장된 `개별상품조회` 제공
- `인원` , `지역` , `날짜` 에 따른 상품 옵션 기능 제공
- `장바구니 담기` `장바구니 담긴 상품 결제` 기능 제공
- 성공적으로 결제를 성공 할 시 `주문 결과 확인` 기능 제공

#### 📌 그 외 기능

- 전체 상품 조회 시 `무한 스크롤`을 사용하여 페이지네이션 없이 유저 경험 개선
- 특정 상품 ID 데이터 중 숙소 위치 데이터를 `Kakao Map Api`를 이용하여 좌표로 변환하고, 이를 지도 데이터에 표시
- `NEXT AUTH`를 이용하여 `JWT 토큰`을 클라이언트단이 아닌 서버에서 자체 관리하여 보안성 향상
- 동적인`meta data` 생성으로 `SEO` 최적화

<br>

## 🛠️ 개발 스택

- 빌드 : Next.js
- 호스팅 : Vercel
- 패키지매니저 : npm
- 라이브러리
  - 상태관리 : zustand
  - 데이터 패칭 : React-Query
  - 라우팅 : Next-App-Routing
  - CSS 스타일링 : Tailwind CSS
  - Autentication : Next-Auth

<br>
     
## 👩‍💻 팀원 소개

|                                         방호진                                          |                                        함지훈                                         |                                       김정은                                        |
| :-------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------: |
|                        [BangHoJin ](https://github.com/banghogu)                        |                            [HamJiHun](https://github.com/)                            |                          [KimJungEun](https://github.com/)                          |
|  <img width="150" src="https://www.techm.kr/news/photo/202107/86116_89523_1948.png"/>   | <img width ="150" src="https://www.techm.kr/news/photo/202107/86116_89523_1948.png" > | <img width="150" src="https://www.techm.kr/news/photo/202107/86116_89523_1948.png"> |
| 전체 숙소 조회 페이지, <br> 개별 숙소 조회 페이지 <br> 숙소타입 필터링 <br>스타일가이드 |              유저인증, <br> 장바구니 <br> 메인 슬라이더 <br>스타일가이드              |                                     여기에 추가                                     |

<br>

## 🎁 디자인 및 컴포넌트 구성

[피그마 링크](https://www.figma.com/file/Z7J7lU8tbDEEldcyiGIGZa?embed_host=notion&kind=file&node-id=0%3A1&type=whiteboard&viewer=1)

Main 페이지 예시
![](https://velog.velcdn.com/images/banghogu/post/727f6d7a-e2d3-4490-bbc5-74289cc25a12/image.png)
| 페이지 | 컴포넌트 | 설명 |
|---------------------|---------------------|---------------------------------------------|
| 로그인 페이지 | 버튼, 입력, 아이콘, 로고 | 로그인 및 관련 요소 |
| 회원가입 페이지 | 버튼, 입력, 아이콘 | 회원가입 및 관련 요소 |
| 메인 페이지 | 네비게이션 바, 메인 컨테이너, 검색, 쿠폰, 숙소 타입 | 메인 화면 요소 |
| 메인 페이지 - 서브 | 지역, 날짜, 인원 | 메인 서브 페이지 요소 |
| 검색 결과 페이지 | 네비게이션 바, 검색 필드, 숙소 리스트 | 검색 결과 페이지 요소 |
| 숙소 상세 페이지 | 네비게이션 바, 이미지, 타이틀, 주소, 객실 타입, 숙소 소개 | 숙소 상세 페이지 요소 |
| 장바구니 페이지 | 네비게이션 바, 장바구니 리스트, 총액, 예약 버튼 | 장바구니 페이지 요소 |

| 바로 예약 페이지 | 네비게이션 바, 예약 상품, 총액, 예약 버튼 | 바로 예약 페이지 요소 |
| 예약 완료 페이지 | 네비게이션 바, 예약 상품 리스트, 총액 | 예약 완료 페이지 요소 |

### 스타일 가이드 페이지

![](https://private-user-images.githubusercontent.com/58257616/319831567-2b05ebe1-d9ed-4bd2-9473-37903b20ce6d.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTIyODMwNjksIm5iZiI6MTcxMjI4Mjc2OSwicGF0aCI6Ii81ODI1NzYxNi8zMTk4MzE1NjctMmIwNWViZTEtZDllZC00YmQyLTk0NzMtMzc5MDNiMjBjZTZkLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA0MDUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNDA1VDAyMDYwOVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTY2OTEzMTZjNGUyNDQzMTM2M2RmMzM0NWQ3MWMwNDJmOWVmMjk2NjY2YzIwNzY5ZmMyMWI2MzUwYmNlNzhlNTUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.j0m_lWJiX_9ktZcSTfKVgzjCINQYgdJBdxwEmfad58k)

storybook 대신 씀
| 바로 예약 페이지 | 네비게이션 바, 예약 상품, 총액, 예약 버튼 | 바로 예약 페이지 요소 |
| 예약 완료 페이지 | 네비게이션 바, 예약 상품 리스트, 총액 | 예약 완료 페이지 요소 |

<br>

## 📨 api 명세서

![](https://velog.velcdn.com/images/banghogu/post/717fbb02-8f7a-4a14-9f8b-a904f641381d/image.png)

<br>

![](https://private-user-images.githubusercontent.com/58257616/319832978-a6be2fe1-b49b-4bb2-b649-4774f1bed517.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTIyODMzMTcsIm5iZiI6MTcxMjI4MzAxNywicGF0aCI6Ii81ODI1NzYxNi8zMTk4MzI5NzgtYTZiZTJmZTEtYjQ5Yi00YmIyLWI2NDktNDc3NGYxYmVkNTE3LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA0MDUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNDA1VDAyMTAxN1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWVjMjY1ZGEzOTJjZTg0M2ZiOWMyZDM2OTk4OGY3ZmZhNWE3MTBmMWFmY2Q5YzU2Mjc0OGUyMWMzMmYxZWIwMDgmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.fehjdzl9juJBzpa5ZHzrdadFalaGpzANROuwgsdrFus)

#### 📌 KPT 개선 사항

- 숙소 스크롤시 유저가 마지막을 인지 할 수 있는 progress bar 추가
