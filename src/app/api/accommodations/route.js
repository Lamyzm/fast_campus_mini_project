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
        "area": "부산",
        "image": faker.image.urlPicsumPhotos(),
        "productName": "파라다이스 호텔 부산",
        "minPrice": 338800,
        "address": "부산광역시 해운대구 달맞이길 30",
        "maximumPeople": 4,
        "soldOut": true,
        "category": "호텔",
        "tel": "02-xxx-xxx",
        "detail": "상품 상세 소개전체"
      },
      {
        "id": 2,
        "area": "부산",
        "image": faker.image.urlPicsumPhotos(),
        "productName": "광안리 오션스테이 호텔",
        "minPrice": 2230000,
        "address": "주소",
        "maximumPeople": 4,
        "soldOut": true,
        "category": "펜션",
        "tel": "02-xxx-xxx",
        "detail": "상품 상세 소개전체"
      },
      {
        "id": 3,
        "area": "부산",
        "image": faker.image.urlPicsumPhotos(),
        "productName": "신라스테이 해운대",
        "minPrice": 230000,
        "address": "주소",
        "maximumPeople": 4,
        "soldOut": true,
        "category": "호텔",
        "tel": "02-xxx-xxx",
        "detail": "상품 상세 소개전체"
      },
      {
        "id": 4,
        "area": "부산",
        "image": faker.image.urlPicsumPhotos(),
        "productName": "부산 리벤시아풀빌라",
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
        "area": "부산",
        "image": faker.image.urlPicsumPhotos(),
        "productName": "부산 폴마레펜션",
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
        "area": "부산",
        "image": faker.image.urlPicsumPhotos(),
        "productName": "부선 넛지567 펜션",
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
        "area": "부산",
        "image": faker.image.urlPicsumPhotos(),
        "productName": "파크 하얏트 부산",
        "minPrice": 550000,
        "address": "주소",
        "maximumPeople": 4,
        "soldOut": true,
        "category": "호텔",
        "tel": "02-xxx-xxx",
        "detail": "상품 상세 소개전체"
      },
      {
        "id": 8,
        "area": "부산",
        "image": faker.image.urlPicsumPhotos(),
        "productName": "시그니엘 부산",
        "minPrice": 370260,
        "address": "주소",
        "maximumPeople": 4,
        "soldOut": true,
        "category": "호텔",
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
