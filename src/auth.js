import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";
import { extractExpTimeFromJwt } from "./utils/decodeJWT";
import { Api } from "@/service/api";


export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      async authorize(credentials) {
        try {
          const res = await Api.post('/login', {
            email: credentials.email,
            password: credentials.password
          }, {
            headers: { "Content-Type": "application/json" }
          });

          if (res.status === 200 && res.data) {
            console.log("header", res.headers.jwttoken);
            console.log("data", res.data);
            console.log("status", { ...res.data, token: res.headers.jwttoken });
            return { ...res.data, token: res.headers.jwttoken };
          }
          throw new Error('Authentication failed');
        } catch (error) {
          console.error('Authentication error:', error);
          return null;
        }
      }
    })
  ],
  callbacks: { //  =====> Add Below Callbacks <=====
    jwt: async ({ token, user }) => {
      console.log("Auth.js called jwttoken", token);
      return { ...token, ...user };
    },
    session: async ({ session, token }) => {
      console.log("Auth.js called session", session);
      session.user = token;
      if (token.exp) {
        console.log("token입니다", token.token)
        console.log(session)
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,


});
