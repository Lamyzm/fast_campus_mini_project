# KDT_FE7_Mini-Project

- ```Hyubang``` : 국내의 모텔, 호텔, 펜션 등 다양한 형태의 숙소를 한눈에 조회하고 예약까지 할 수 있는 ```플랫폼``` 페이지
- 숙소 예약 플랫폼
- 숙소 예약을 위한 여러 기능이 있습니다.
- 배포링크 : 
- 테스트 아이디 : 
- 테스트 비밀번호 : 

  
## 💻 프로젝트 소개
제작기간 : 2024.03.18 ~ 2024.04.05 <br>
제작인원 : FE_3명, BE_3명

#### 📌 주요기능
-  ```회원가입``` ```로그인``` 기능
- 데이터 베이스에 저장된 ```전체상품목록조회``` 제공
- 특정 상품 ID 클릭 시 데이터 베이스에 저장된 ```개별상품조회``` 제공
- ```인원``` ,  ```지역``` ,  ```날짜``` 에 따른 상품 옵션 기능 제공
- ```장바구니 담기``` ```장바구니 담긴 상품 결제``` 기능 제공
- 성공적으로 결제를 성공 할 시 ```주문 결과 확인``` 기능 제공



#### 📌 그 외 기능
-  전체 상품 조회 시 ```무한 스크롤```을 사용하여 페이지네이션 없이 유저 경험 개선
- 특정 상품 ID 데이터 중 숙소 위치 데이터를 ```Kakao Map Api```를 이용하여 좌표로 변환하고, 이를 지도 데이터에 표시
-  ``` NEXT AUTH ```를 이용하여 ```JWT 토큰```을 클라이언트단이 아닌 서버에서 자체 관리하여 보안성 향상
- 동적인```meta data``` 생성으로 ```SEO``` 최적화 

## 🛠️ 개발 스택
- 빌드 : <img src="https://img.shields.io/badge/Nextjs-000000?style=for-the-badge&logo=nextdotjs&logoColor=white">
- 호스팅 :     <img src="https://img.shields.io/badge/vercel-000000?style=for-the-badge&logo=vercel&logoColor=white">
- 패키지매니저 : <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white">
- 라이브러리
    - 상태관리 : zustand 
    - 데이터 패칭 : <img src="https://img.shields.io/badge/reactquery-FF4154?style=for-the-badge&logo=reactquery&logoColor=white">
    - 라우팅 : <img src="https://img.shields.io/badge/Next App Router-000000?style=for-the-badge&logo=nextdotjs&logoColor=white">
    - CSS 스타일링 : <img src="https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white">
    - Autentication: <img src="https://img.shields.io/badge/Next AUTH-000000?style=for-the-badge&logo=nextdotjs&logoColor=white">
    

