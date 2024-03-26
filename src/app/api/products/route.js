import { faker } from "@faker-js/faker";
import { NextResponse } from "next/server";

// export async function GET() {
//   return NextResponse.json({ helloa: "world" });
// }

export async function GET() {
  // await new Promise((resolve) => {
  //   setTimeout(() => {
  //     resolve(null);
  //   }, 3000);
  // });
  return NextResponse.json({
    "content": [
      {
        "id": 1,
        "area": "강원",
        "image": faker.image.urlPicsumPhotos(),
        "productName": "인천 파크마린호텔",
        "minPrice": 100000,
        "address": "주소",
        "maximumPeople": 4,
        "soldOut": true,
        "category": "호텔",
        "tel": "02-xxx-xxx",
        "detail": "상품 상세 소개전체"
      },
      {
        "id": 2,
        "area": "강원",
        "image": faker.image.urlPicsumPhotos(),
        "productName": "군산 스테이 호텔",
        "minPrice": 1230000,
        "address": "주소",
        "maximumPeople": 4,
        "soldOut": true,
        "category": "펜션",
        "tel": "02-xxx-xxx",
        "detail": "상품 상세 소개전체"
      },
      {
        "id": 3,
        "area": "강원",
        "image": faker.image.urlPicsumPhotos(),
        "productName": "골든튤립 인천공항 호텔 & 스위트",
        "minPrice": 1230000,
        "address": "주소",
        "maximumPeople": 4,
        "soldOut": true,
        "category": "펜션",
        "tel": "02-xxx-xxx",
        "detail": "상품 상세 소개전체"
      },
      {
        "id": 4,
        "area": "강원",
        "image": faker.image.urlPicsumPhotos(),
        "productName": "일산 킨텍스 바이 케이트리",
        "minPrice": 125000,
        "address": "주소",
        "maximumPeople": 4,
        "soldOut": true,
        "category": "펜션",
        "tel": "02-xxx-xxx",
        "detail": "상품 상세 소개전체"
      },
      {
        "id": 5,
        "area": "강원",
        "image": faker.image.urlPicsumPhotos(),
        "productName": "양양 더앤리조트 호텔스파",
        "minPrice": 145000,
        "address": "주소",
        "maximumPeople": 4,
        "soldOut": true,
        "category": "펜션",
        "tel": "02-xxx-xxx",
        "detail": "상품 상세 소개전체"
      },
      {
        "id": 6,
        "area": "강원",
        "image": faker.image.urlPicsumPhotos(),
        "productName": "동해보양온천컨벤션 호텔",
        "minPrice": 16000,
        "address": "주소",
        "maximumPeople": 4,
        "soldOut": true,
        "category": "펜션",
        "tel": "02-xxx-xxx",
        "detail": "상품 상세 소개전체"
      },
      {
        "id": 7,
        "area": "경남",
        "image": faker.image.urlPicsumPhotos(),
        "productName": "상품명",
        "minPrice": 140000,
        "address": "주소",
        "maximumPeople": 4,
        "soldOut": true,
        "category": "펜션",
        "tel": "02-xxx-xxx",
        "detail": "상품 상세 소개전체"
      },
      {
        "id": 8,
        "area": "서울",
        "image": faker.image.urlPicsumPhotos(),
        "productName": "상품명",
        "minPrice": 120000,
        "address": "주소",
        "maximumPeople": 4,
        "soldOut": true,
        "category": "펜션",
        "tel": "02-xxx-xxx",
        "detail": "상품 상세 소개전체"
      },
    ],
    "pageable": {
      "pageNumber": 0,
      "pageSize": 10,
      "sort": {
        "empty": false,
        "sorted": true,
        "unsorted": false
      },
      "offset": 0,
      "paged": true,
      "unpaged": false
    },
    "last": true,
    "totalElements": 5,
    "totalPages": 1,
    "size": 10,
    "number": 0,
    "sort": {
      "empty": false,
      "sorted": true,
      "unsorted": false
    },
    "first": true,
    "numberOfElements": 5,
    "empty": false
  }
  );
}
