import { faker } from "@faker-js/faker";
import { NextResponse } from "next/server";

// export async function GET() {
//   return NextResponse.json({ helloa: "world" });
// }

export async function GET() {
  return NextResponse.json([
    {
      "orderId": 1,
      "accommodation": {
        "accommodationId": 1,
        "area": "강원",
        "image": faker.image.urlPicsumPhotos(),
        "accommodationName": "인천 파크마린호텔",
        "address": "주소",
        "category": "호텔",
        "detail": "상품 상세 소개전체",
        "checkIn": "2024-03-15",
        "checkOut": "2024-03-16",
        "tel": "02-xxx-xxx",
        "peoples": 4,
        "room": {
          "roomId": 2,
          "roomName": "1호실 (싱글or트윈)",
          "price": 100000
        }
      }
    },
    {
      "orderId": 2,
      "accommodation": {
        "accommodationId": 1,
        "area": "강원",
        "image": "url",
        "accommodationName": "상품명",
        "address": "강원도 감자리 감자동 감자시",
        "category": "호텔",
        "detail": "상품 상세 소개전체",
        "checkIn": "2024-03-15",
        "checkOut": "2024-03-26",
        "tel": "02-xxx-xxx",
        "peoples": 4,
        "room": {
          "roomId": 2,
          "roomName": "호실이나 분류(싱글or트윈)",
          "price": 100000
        }
      }
    }
  ])
}
