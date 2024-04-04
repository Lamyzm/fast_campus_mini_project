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

- 빌드 : Next.js
- 호스팅 : Vercel
- 패키지매니저 : npm
- 라이브러리
    - 상태관리 : zustand (toolkit)
    - 데이터 패칭 : React-Query
    - 라우팅 : Next-App-Routing
    - CSS 스타일링 : Tailwind CSS
    - Autentication : Next-Auth
    
     
     
## 👩‍💻 팀원 소개

| 방호진  |  함지훈   |  김정은   |
| :------------: | :------------: |:------------: | 
| [BangHoJin ](https://github.com/banghogu)  |  [HamJiHun](https://github.com/)  |  [KimJungEun](https://github.com/)  |    
|  <img width="150" src="https://www.techm.kr/news/photo/202107/86116_89523_1948.png"/> |  <img width ="150" src="https://github.com/subinsad/KDT7_FE_Toy1_team4/assets/92204014/c9791652-c9cd-49f6-922f-7d271acdb678" >  | <img width="150" src="https://github.com/subinsad/KDT7_FE_Toy1_team4/assets/92204014/e0a4d495-b9f2-462a-8c42-58dd29917650"> |
| **전체 숙소 조회, 개별 숙소조회**  |  여기에 추가 | 여기에 추가  |

