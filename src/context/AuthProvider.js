'use client'
import AuthUserSateCheckProvider from "@/context/AuthUserSateCheckProvider";
import { SessionProvider } from "next-auth/react";

export default function AuthProvider({ children, session }) {
  return (
    <SessionProvider session={session}>
      <AuthUserSateCheckProvider>
        {children}
      </AuthUserSateCheckProvider>
    </SessionProvider>
  );
}


// import { SessionProvider } from "next-auth/react"

// export default function AuthProvider({ children, session }) {
//   return (
//     <SessionProvider session={session}>
//       {children}
//     </SessionProvider>
//   )
// }
