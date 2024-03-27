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
  return NextResponse.json({ message: faker.image.urlPicsumPhotos() });
}
