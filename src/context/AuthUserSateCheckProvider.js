'use client'
import { SessionProvider, useSession, signOut } from 'next-auth/react';
import { useEffect, createContext, useState } from 'react';
import { getToken } from 'next-auth/jwt';
import { middleware } from '../middleware';
import dayjs from 'dayjs';
import { decodedJWT } from '@/utils/decodeJWT';

const AuthUserSateCheckContext = createContext();

export default function AuthUserSateCheckProvider({ children }) {
  const { data, status } = useSession();
  const [isSigningOut, setIsSigningOut] = useState(false);

  useEffect(() => {
    const expire = data?.user?.exp;
    const currentTime = dayjs().unix();
    const cookieUserExp = decodedJWT(data?.user.token)?.exp
    const shouldSignOut = status === "authenticated" && expire && (cookieUserExp - currentTime) < 0;
    if (shouldSignOut && !isSigningOut) {
      setIsSigningOut(true); // 로그아웃 프로세스 시작
      alert("세션이 만료되어 로그인이 해제됩니다.");
      signOut();
    }
  }, [data, status]);


  return (
    <AuthUserSateCheckContext.Provider value={""} >
      {children}
    </AuthUserSateCheckContext.Provider>
  )
}
