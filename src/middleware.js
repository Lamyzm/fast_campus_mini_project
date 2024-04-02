import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

const secret = process.env.SECRET;
export async function middleware(req, event) {
  // 로그인 했을 경우에만 존재함 ( "next-auth.session-token" 쿠키가 존재할 때 )
  const session = await getToken({ req, secret, raw: true });
  const { pathname } = req.nextUrl;
  console.log("sesstion", session);
  // console.log(session);
  // console.log("hi");
  // console.log(pathname);

  // 로그인/회원가입 접근 제한
  if (pathname.startsWith("/login") || pathname.startsWith("/join")) {
    if (session) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  // cartPage에서 unauthenticated 일시 login으로 리디렉트
  if (pathname.startsWith("/cart") && !session) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (pathname === "/") {
    return NextResponse.redirect(new URL("/main", req.url));
  }
}

export const config = {
  matcher: ["/login", "/join", "/", '/main', "/cart"],
};
