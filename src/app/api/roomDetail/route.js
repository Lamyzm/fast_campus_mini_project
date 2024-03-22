import { faker } from "@faker-js/faker";
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({
        "content":
        {
            "id": 1,
            "area": "강원",
            "image": faker.image.urlPicsumPhotos(),
            "productName": "인천 파크마린호텔",
            "minPrice": 100000,
            "address": "부평구",
            "maximumPeople": 4,
            "soldOut": true,
            "category": "호텔",
            "tel": "02-xxx-xxx",
            "detail": "상품 상세 소개전체"
        },
    });
}
